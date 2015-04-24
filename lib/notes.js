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
    this.loopCounter = 0;

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
    var current = this.current = 'square1';
    this.temp[current] += '{loop' + this.loopCounter + '}';
    this.temp[current] += compileNotes(notes);
    return this;
};

Notes.prototype.square2 = function square2(notes) {
    var current = this.current = 'square2';
    this.temp[current] += '{loop' + this.loopCounter + '}';
    this.temp.square2 += compileNotes(notes);
    return this;
};

Notes.prototype.triangle = function triangle(notes) {
    var current = this.current = 'triangle';
    this.temp[current] += '{loop' + this.loopCounter + '}';
    this.temp[current] += compileNotes(notes);
    return this;
};

Notes.prototype.noise = function noise(notes) {
    var current = this.current = 'noise';
    this.temp[current] += '{loop' + this.loopCounter + '}';
    this.temp[current] += compileNotes(notes);
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
    var loopCode = '\n\t.byte set_loop1_counter, ' + n + '\n.loop:\n';
    var loopTemp = '{loop' + this.loopCounter + '}';

    if (this.hasLoop[current]) {
        throw new Error(current + ' has already been looped and can only loop 1 time');
    }

    this.temp[current] = this.temp[current].replace(loopTemp, loopCode);

    this.endCode[current] += '\n\t.byte loop1\n\t.word .loop\n';
    this.hasLoop[current] = true;

    return this;
};

function compileNotes(notes) {
    var s = notes.join(',');
    var ret = '\n\t.byte {time}, ' + s + '\n';
    return ret;
}

module.exports = Notes;
