var test = require('tape');
var Notes = require('../lib/notes');

test('initial values', function (t) {
    t.plan(5);

    var notes = Notes('song0_');
    t.ok(notes, 'notes is setup');
    t.equal(notes.code.square1, 'song0_square1:\n', 'Square 1 code is incorrect');
    t.equal(notes.code.square2, 'song0_square2:\n', 'Square 2 code is incorrect');
    t.equal(notes.code.triangle, 'song0_triangle:\n', 'Triangle code is incorrect');
    t.equal(notes.code.noise, 'song0_noise:\n', 'Noise code is incorrect');
});

test('temp code check', function (t) {
    t.plan(8);

    var notes = Notes('song0_');
    t.equal(notes.temp.square1, '', 'Square 1 temp code block should be empty');
    notes.square1(['A3', 'B3', 'C3']);
    t.equal(notes.temp.square1, '{loop0}\n\t.byte {time}, A3,B3,C3\n', 'Square 1 temp code block does not have the correct output');

    t.equal(notes.temp.square2, '', 'Square 2 temp code block should be empty');
    notes.square2(['A4', 'B4', 'C4']);
    t.equal(notes.temp.square2, '{loop0}\n\t.byte {time}, A4,B4,C4\n', 'Square 2 temp code block does not have the correct output');

    t.equal(notes.temp.triangle, '', 'Triangle temp code block should be empty');
    notes.triangle(['C3', 'E3', 'G3']);
    t.equal(notes.temp.triangle, '{loop0}\n\t.byte {time}, C3,E3,G3\n', 'Triangle temp code block does not have the correct output');

    t.equal(notes.temp.noise, '', 'Noise temp code block should be empty');
    notes.noise(['$04', '$06', '$04']);
    t.equal(notes.temp.noise, '{loop0}\n\t.byte {time}, $04,$06,$04\n', 'Noise temp code block does not have the correct output');
});

test('set timing', function (t) {
    t.plan(2);

    var notes = Notes('song0_');

    notes.square1(['A3', 'B3', 'C3'])
    .timing(1/16);
    t.equal(notes.temp.square1, '{loop0}\n\t.byte sixteenth, A3,B3,C3\n', 'Square 1 temp code block does not have the correct output');

    notes.square2(['A4', 'B4', 'C4'])
    .timing(1/16);
    t.equal(notes.temp.square2, '{loop0}\n\t.byte sixteenth, A4,B4,C4\n', 'Square 2 temp code block does not have the correct output');
});

test('looping', function (t) {
    t.plan(2);

    var notes = Notes('song0_');

    notes.square1(['A3', 'B3', 'C3'])
    .timing(1/16)
    .loop(4);

    t.equal(notes.endCode.square1, '\n\t.byte loop1\n\t.word .loop\n', 'Loop end code should exist');
    t.equal(notes.temp.square1, '\n\t.byte set_loop1_counter, 4\n.loop:\n\n\t.byte sixteenth, A3,B3,C3\n', 'Loop label and note code should exist');
});
