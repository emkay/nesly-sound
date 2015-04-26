var fs = require('fs');
var mkdirp = require('mkdirp');
var cpr = require('cpr');

var Notes = require('./lib/notes');
var songHeaders = require('./lib/song-headers');

var buildDir = 'build/';
var libAsmDir = __dirname + '/lib/asm';

function genSongHeader() {
    var channels = [
        'square1',
        'square2',
        'triangle',
        'noise'
    ];

    var header = [];
    header.push('song{i}_header:');
    header.push('\t.byte $0' + songHeaders['streamCount']);

    channels.forEach(function (channel) {
        var channelHeader = genChannelHeader(channel);
        header.push(channelHeader);
    });

    return header;
}

function prependByte(prop) {
    return prop ? '\t.byte ' + prop : '';
}

function genChannelHeader(channel) {
    var channelOptions = songHeaders[channel];
    var name = channelOptions && channelOptions.name;
    var enabled = channelOptions && channelOptions.enabled ? '$01' : '$00';
    var channelName = channelOptions && channelOptions.channel;
    var duty = channelOptions && channelOptions.duty;
    var ve = channelOptions && channelOptions.ve;
    var pointer = channelOptions && channelOptions.pointer;
    var tempo = channelOptions && channelOptions.tempo;

    var channelHeader = [
        prependByte(name),
        prependByte(enabled),
        prependByte(channelName),
        prependByte(duty),
        prependByte(ve),
        '\t.word ' + pointer,
        prependByte(tempo)
    ];

    return channelHeader.join('\n');
}

var songs = [];
var index = 0;

function Song(options) {
    if (!(this instanceof Song)) {
        return new Song(options);
    }
    this.prefix = 'song' + index + '_';

    this.isLooped = false;

    this.notes = Notes(this.prefix);
    this.square1 = this.notes.square1.bind(this.notes);
    this.square2 = this.notes.square2.bind(this.notes);
    this.triangle = this.notes.triangle.bind(this.notes);
    this.noise = this.notes.noise.bind(this.notes);

    if (!options) {
        options = {};
    }
    
    this.song = '';
    index++;
}

Song.prototype.loop = function loop() {
    this.isLooped = true;
    return this;
};

Song.prototype.done = function done() {
    var self = this;
    var codeMap = self.notes.code;
    var tempMap = self.notes.temp;
 
    var i = songs.length;
    var header = genSongHeader();
    var songHeader = header.map(function (line) {
        return line.replace('{i}', i);
    }).join('\n');

    self.song += '\nmain_loop:\n';
    ['square1', 'square2', 'triangle', 'noise'].forEach(function (channel) {
        var currentCode = self.notes.current === channel ? self.notes.currentCode : '';
        var code = codeMap[channel] + currentCode.replace(/\{loop\d\}/gm, '') + tempMap[channel].replace(/\{loop\d\}/gm, '');
        if (!self.isLooped) {
            code += endSound();
        }
        self.song += code;
    });

    if (self.isLooped) {
        self.song += '\n\t.byte loop\n\t.word ' + 'main_loop\n';
    }
    var song = songHeader + '\n\n' + self.song;
    songs.push(song);
};

function endSound() {
    return '\n\t.byte endsound\n';
}

function buildSongs(err) {
    var soundEnginePath = buildDir + '/sound_engine.s';
    var songsOut = '\nNUM_SONGS = $0' + songs.length; // kinda hacky :(
    var words = [];
    var includes = [];
    songsOut += '\n\nsong_headers:\n';

    if (!err) {

        cpr(libAsmDir, buildDir, function (err, files) {
            if (err) {
                console.error(err);
            } else {
                songs.forEach(function (song, i) {
                    var filePath = buildDir + '/song' + i + '.i';
                    var word = '\t.word song' + i + '_header\n';
                    var include = '\t.include "song' + i + '.i"\n';

                    fs.writeFile(filePath, song, function (err) {
                        if (err) {
                            console.error(err);
                        }
                    });

                    words.push(word);
                    includes.push(include);
                });

                words.forEach(function (w) {
                    songsOut += w;
                });

                songsOut += '\n\t.include "sound_opcodes.s"\n';
                songsOut += '\n\t.include "note_table.i"\n';
                songsOut += '\n\t.include "note_length_table.i"\n';
                songsOut += '\n\t.include "vol_envelopes.i"\n';

                includes.forEach(function (inc) {
                    songsOut += inc;
                });

                fs.appendFile(soundEnginePath, songsOut, function (err) {
                    if (err) {
                        console.error(err);
                    }
                });
            }
        });

    } else {
        console.error(err);
    }
}

Song.prototype.write = function write() {
    mkdirp(buildDir, buildSongs);
};

module.exports = Song;
