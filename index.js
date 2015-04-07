var fs = require('fs');

var header = [
    'song{i}_header:',
    '\t.byte $04',
    '\t.byte MUSIC_SQ1',
    '\t.byte $01',
    '\t.byte SQUARE_1',
    '\t.byte $77',
    '\t.word song{i}_square1',
    
    '\t.byte MUSIC_SQ2',
    '\t.byte $01',
    '\t.byte SQUARE_2',
    '\t.byte $B7',
    '\t.word song{i}_square2',
    
    '\t.byte MUSIC_TRI',
    '\t.byte $01',
    '\t.byte TRIANGLE',
    '\t.byte $81',
    '\t.word song{i}_tri',
    
    '\t.byte MUSIC_NOI',
    '\t.byte $00',
    '\t.byte NOISE',
    '\t.byte $75',
    '\t.word song{i}_noise'
];

var songs = [];

function Song() {
    var i = songs.length;
    var prefix = 'song' + i + '_';

    this.sqr1 = prefix + 'square1:\n';
    this.hasSquare1 = false;

    this.sqr2 = prefix + 'square2:\n';
    this.hasSquare2 = false;

    this.tri = prefix + 'tri:\n';
    this.hasTriangle = false;

    this.n = prefix + 'noise:\n';
    this.hasNoise = false;

    this.song = '';
}

function compileNotes(notes) {
    var s = notes.join(',');
    return '\t.byte ' + s;
}

function endByte() {
    return '\t.byte $FF\n';
}

Song.prototype.square1 = function square1(notes) {
    var s = compileNotes(notes);
    this.sqr1 += this.hasSquare1 ? '\n' + s : s;
    this.hasSquare1 = true;
};

Song.prototype.square2 = function square2(notes) {
    var s = compileNotes(notes);
    this.sqr2 += this.hasSquare2 ? '\n' + s : s;
    this.hasSquare2 = true;
};

Song.prototype.triangle = function triangle(notes) {
    var s = compileNotes(notes);
    this.tri += this.hasTri ? '\n' + s : s;
    this.hasTri = true;
};

Song.prototype.noise = function noise(notes) {
    var s = compileNotes(notes);
    this.n += this.hasNoise ? '\n' + s : s;
    this.hasNoise = true;
};

Song.prototype.compile = function compile() {
    if (this.hasSquare1) {
        this.song += this.sqr1 + '\n' + endByte();
    }

    if (this.hasSquare2) {
        this.song += this.sqr2 + '\n' + endByte();
    }

    if (this.hasTri) {
        this.song += this.tri + '\n' + endByte();
    }

    if (this.hasNoise) {
        this.song += this.n + '\n' + endByte();
    }

    var i = songs.length;
    var songHeader = header.map(function (line) {
        return line.replace('{i}', i);
    }).join('\n');

    var song = songHeader + '\n\n' + this.song;
    songs.push(song);
    console.log(song);
};

module.exports = Song;
