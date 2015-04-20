var noteTiming = require('./timing');

function Notes(prefix) {
    if (!(this instanceof Notes)) {
        return new Notes(prefix);
    }

    this.hasLoop = {
        square1: false,
        square2: false,
        triangle: false,
        noise: false
    };

    this.code = {};
    this.code.square1 = prefix + 'square1:\n';
    this.code.square2 = prefix + 'square2:\n';
    this.code.triangle = prefix + 'triangle:\n';
    this.code.noise = prefix + 'noise:\n';

    this.current = null;

    this.endCode = {
        square1: '',
        square2: '',
        triangle: '',
        noise: ''
    };

    this.temp = {
        square1: '',
        square2: '',
        triangle: '',
        noise: ''
    };
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

Notes.prototype.loop = function loop(n) {
    n = n || 1;
    var current = this.current;
    var loopCounter = '\n\t.byte set_loop1_counter, ' + n;

    if (this.hasLoop[current]) {
        throw new Error(current + ' has already been looped and can only loop 1 time');
    }

    this.temp[current] += loopCounter;
    this.temp[current] += '\n.loop:\n';

    this.endCode[current] += '\n\t.byte loop1\n\t.word .loop';
    this.hasLoop[current] = true;
};

function compileNotes(notes) {
    var s = notes.join(',');
    var ret = '\n\t.byte {time}, ' + s + '\n';
    return ret;
}

module.exports = Notes;
