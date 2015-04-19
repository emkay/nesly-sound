var test = require('tape');
var Notes = require('../../lib/notes');

test('initial values', function (t) {
    t.plan(5);

    var notes = Notes('song0_');
    t.ok(notes, 'notes is setup');
    t.equal(notes.square1Code, 'song0_square1:\n', 'Square 1 code is incorrect');
    t.equal(notes.square2Code, 'song0_square2:\n', 'Square 2 code is incorrect');
    t.equal(notes.triangleCode, 'song0_tri:\n', 'Triangle code is incorrect');
    t.equal(notes.noiseCode, 'song0_noise:\n', 'Noise code is incorrect');
});
