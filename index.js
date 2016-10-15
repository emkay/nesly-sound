const fs = require('fs')
const mkdirp = require('mkdirp')
const cpr = require('cpr')
const Note = require('octavian').Note

const Notes = require('./lib/notes')
const songHeaders = require('./lib/song-headers')
const noteTiming = require('./lib/timing')

const buildDir = 'build/'
const libAsmDir = `${__dirname}/lib/asm`

function genSongHeader (options) {
  options = options || {}
  const channels = [
    'square1',
    'square2',
    'triangle',
    'noise'
  ]

  const header = []
  header.push('song{i}_header:')
  header.push('\t.byte $0' + songHeaders['streamCount'])

  channels.forEach(function (channel) {
    var channelHeader = genChannelHeader(channel, options)
    header.push(channelHeader)
  })

  return header
}

function prependByte (prop) {
  return prop ? '\t.byte ' + prop : ''
}

function genChannelHeader (channel, options) {
  const channelOptions = songHeaders[channel]
  const name = channelOptions && channelOptions.name
  const enabled = channelOptions && channelOptions.enabled ? '$01' : '$00'
  const channelName = channelOptions && channelOptions.channel
  const duty = channelOptions && channelOptions.duty
  const ve = channelOptions && channelOptions.ve
  const pointer = channelOptions && channelOptions.pointer
  const tempo = (options && options.tempo && options.tempo[channel]) || (channelOptions && channelOptions.tempo)

  const channelHeader = [
    prependByte(name),
    prependByte(enabled),
    prependByte(channelName),
    prependByte(duty),
    prependByte(ve),
    '\t.word ' + pointer,
    prependByte(tempo)
  ]

  return channelHeader.join('\n')
}

const songs = []
let index = 0

function Song (options) {
  if (!(this instanceof Song)) {
    return new Song(options)
  }
  this.prefix = 'song' + index + '_'

  this.isLooped = false

  this.notes = Notes(this.prefix)
  this.square1 = this.notes.square1.bind(this.notes)
  this.square2 = this.notes.square2.bind(this.notes)
  this.triangle = this.notes.triangle.bind(this.notes)
  this.noise = this.notes.noise.bind(this.notes)

  this.options = options || {}
  this.timing = options && options.timing || 1 / 8
  this.song = ''
  index++
}

Song.prototype.note = function note (n) {
  const note = new Note(n)
  return note
}

Song.prototype.loop = function loop () {
  this.isLooped = true
  return this
}

Song.prototype.done = function done () {
  const self = this
  const codeMap = self.notes.code
  const tempMap = self.notes.temp
  const channels = ['square1', 'square2', 'triangle', 'noise']

  const i = songs.length
  const header = genSongHeader(self.options)
  const songHeader = header.map(function (line) {
    return line.replace('{i}', i)
  }).join('\n')

  self.song += '\nmain_loop:\n'

  channels.forEach(function (channel) {
    const currentCode = self.notes.current === channel ? self.notes.currentCode : ''
    let code = codeMap[channel] + tempMap[channel].replace(/\{loop\d\}/gm, '') + currentCode.replace(/\{loop\d\}/gm, '')
    if (!self.isLooped) {
      code += endSound()
    }
    self.song += code.replace(/\{time\}/gm, noteTiming[self.timing])
  })

  if (self.isLooped) {
    self.song += '\n\t.byte loop\n\t.word ' + 'main_loop\n'
  }
  const song = songHeader + '\n\n' + self.song
  songs.push(song)
}

function endSound () {
  return '\n\t.byte endsound\n'
}

function buildSongs (err) {
  const soundEnginePath = buildDir + '/sound_engine.s'
  let songsOut = '\nNUM_SONGS = $0' + songs.length // kinda hacky :(

  const words = []
  const includes = []
  songsOut += '\n\nsong_headers:\n'

  if (!err) {
    cpr(libAsmDir, buildDir, function (err, files) {
      if (err) {
        console.error(err)
      } else {
        songs.forEach(function (song, i) {
          const filePath = buildDir + '/song' + i + '.i'
          const word = '\t.word song' + i + '_header\n'
          const include = '\t.include "song' + i + '.i"\n'

          fs.writeFile(filePath, song, function (err) {
            if (err) {
              console.error(err)
            }
          })

          words.push(word)
          includes.push(include)
        })

        words.forEach(function (w) {
          songsOut += w
        })

        songsOut += '\n\t.include "sound_opcodes.s"\n'
        songsOut += '\n\t.include "duty.s"\n'
        songsOut += '\n\t.include "note_table.i"\n'
        songsOut += '\n\t.include "note_length_table.i"\n'
        songsOut += '\n\t.include "vol_envelopes.i"\n'

        includes.forEach(function (inc) {
          songsOut += inc
        })

        fs.appendFile(soundEnginePath, songsOut, function (err) {
          if (err) {
            console.error(err)
          }
        })
      }
    })
  } else {
    console.error(err)
  }
}

Song.prototype.write = function write () {
  mkdirp(buildDir, buildSongs)
}

module.exports = Song
