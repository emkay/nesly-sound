var noteTiming = require('./timing');

function Notes(prefix) {
    if (!(this instanceof Notes)) {
        return new Notes(prefix);
    }
    this.square1Code = prefix + 'square1:\n';
    this.square2Code = prefix + 'square2:\n';
    this.triangleCode = prefix + 'tri:\n';
    this.noiseCode = prefix + 'noise:\n';

    this.current = null;

    this.temp = {};
    this.temp.square1 = '';
    this.temp.square2 = '';
    this.temp.triangle = '';
    this.temp.noise = '';
}

Notes.prototype.square1 = function square1(notes) {
    this.current = 'square1';
    this.temp.square1 = compileNotes(notes);
    return this;
};

Notes.prototype.square2 = function square2(notes) {
    this.current = 'square2';
    this.temp.square2 = compileNotes(notes);
    return this;
};

Notes.prototype.triangle = function triangle(notes) {
    this.current = 'triangle';
    this.temp.triangle = compileNotes(notes);
    return this;
};

Notes.prototype.noise = function noise(notes) {
    this.current = 'noise';
    this.temp.noise = compileNotes(notes);
    return this;
};

Notes.prototype.timing = function timing(time) {
    var t = noteTiming[time];
    var current = this.current;
    this.temp[current] = this.temp[current].replace('{time}', t);
    return this;
};

function compileNotes(notes) {
    var s = notes.join(',');
    var ret = '\n\t.byte {time}, ' + s;
    return ret;
}

module.exports = Notes;
