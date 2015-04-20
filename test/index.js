var test = require('tape');
var Song = require('..');

test('initial values', function (t) {
    t.plan(3);

    var song = Song();
    t.ok(song, '`song` should be instantiated');
    t.equal(song.prefix, 'song0_', 'Song prefix should be the initial value');
    t.equal(song.isLooped, false, 'Song should not be looped');
});

test('Song looping', function (t) {
    t.plan(1);

    var song = Song();
    song.loop()
        .done();
        
    t.equal(song.isLooped, true, '`isLooped` should be true'); 
});
