var fs = require('fs');
var mkdirp = require('mkdirp');
var cpr = require('cpr');

var noteTiming = require('./lib/timing');
var songHeaders = require('./lib/song-headers');

var buildDir = __dirname + '/build';
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
    var prefix = 'song' + index + '_';

    if (!options) {
        options = {};
    }

    this.sqr1 = prefix + 'square1:\n';
    this.hasSquare1 = false;

    this.sqr2 = prefix + 'square2:\n';
    this.hasSquare2 = false;

    this.tri = prefix + 'tri:\n';
    this.hasTriangle = false;

    this.n = prefix + 'noise:\n';
    this.hasNoise = false;

    this.song = '';
    index++;
}

Song.prototype.compileNotes = function compileNotes(notes, timing) {
    var s = notes.join(',');
    var time = timing && noteTiming[timing] || 'eighth';
    var ret = '\t.byte ' + time;
    return ret + '\n\t.byte ' + s;
}

Song.prototype.square1 = function square1(notes, timing) {
    var s = this.compileNotes(notes, timing);
    this.sqr1 += this.hasSquare1 ? '\n' + s : s;
    this.hasSquare1 = true;
};

Song.prototype.square2 = function square2(notes, timing) {
    var s = this.compileNotes(notes, timing);
    this.sqr2 += this.hasSquare2 ? '\n' + s : s;
    this.hasSquare2 = true;
};

Song.prototype.triangle = function triangle(notes, timing) {
    var s = this.compileNotes(notes, timing);
    this.tri += this.hasTri ? '\n' + s : s;
    this.hasTri = true;
};

Song.prototype.noise = function noise(notes, timing) {
    var s = this.compileNotes(notes, timing);
    this.n += this.hasNoise ? '\n' + s : s;
    this.hasNoise = true;
};

Song.prototype.compile = function compile() {
    if (this.hasSquare1) {
        this.song += this.sqr1 + endSound() + '\n';
    }

    if (this.hasSquare2) {
        this.song += this.sqr2 + endSound() + '\n';
    }

    if (this.hasTri) {
        this.song += this.tri + endSound() + '\n';
    }

    if (this.hasNoise) {
        this.song += this.n + endSound() + '\n';
    }

    var i = songs.length;
    var header = genSongHeader();
    var songHeader = header.map(function (line) {
        return line.replace('{i}', i);
    }).join('\n');

    var song = songHeader + '\n\n' + this.song;
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

function write() {
    mkdirp(buildDir, buildSongs);
}

module.exports = {
    Song: Song,
    write: write
};
