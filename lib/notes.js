var noteTiming = require('./timing');
var dutyMap = require('./duty');

function isSquare(channel) {
    return channel === ('square1' || 'square2');
}

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
    this.prev = null;
    this.currentCode = '';
    this.loopCounter = 0;

    this.temp = {
        square1: '',
        square2: '',
        triangle: '',
        noise: ''
    };
}

Notes.prototype.note = function note(channel, notes) {
    this.prev = this.current;
    this.current = channel;

    if (this.prev && this.currentCode) {
        this.temp[this.prev] += this.currentCode;
        this.currentCode = null;
    }
    this.currentCode = '{loop' + this.loopCounter + '}';
    this.currentCode += compileNotes(notes);
};

Notes.prototype.square1 = function square1(notes) {
    if (notes) {
        this.note('square1', notes);
    }
    return this;
};

Notes.prototype.square2 = function square2(notes) {
    if (notes) {
        this.note('square2', notes);
    }
    return this;
};

Notes.prototype.triangle = function triangle(notes) {
    if (notes) {
        this.note('triangle', notes);
    }
    return this;
};

Notes.prototype.noise = function noise(notes) {
    if (notes) {
        this.note('noise', notes);
    }
    return this;
};

Notes.prototype.timing = function timing(time) {
    var t = noteTiming[time];
    this.currentCode = this.currentCode.replace('{time}', t);
    return this;
};

Notes.prototype.duty = function duty(n) {
    if (isSquare(this.current)) {
        var d = dutyMap[n] || dutyMap[0];
        this.currentCode += '\n\t.byte duty, ' + d;
    }

    return this;
};

Notes.prototype.volumeEnvelope = function ve(e) {
    this.currentCode += '\n\t.byte volume_envelope, ' + e;
    return this;
};

Notes.prototype.blip = function blip() {
    this.volumeEnvelope('ve_blip');
    return this;
};

Notes.prototype.staccato = function staccato() {
    this.volumeEnvelope('ve_short_staccato');
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
    this.currentCode = this.currentCode.replace(loopTemp, loopCode);
    this.currentCode += '\n\t.byte loop1\n\t.word .loop\n';

    this.hasLoop[current] = true;
    return this;
};

function compileNotes(notes) {
    var s = notes.join(',');
    var ret = '\n\t.byte {time}, ' + s + '\n';
    return ret;
}

module.exports = Notes;
