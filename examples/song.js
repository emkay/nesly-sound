var neslySound = require('../');
var Song = neslySound.Song;

var song = Song();
var notes = song.notes;
var square1 = notes.square1;
var square2 = notes.square2;
var triangle = notes.triangle;
var noise = notes.noise;


square1(['A3', 'C3', 'E3', 'A4'])
    .timing(1/16)
    .loop(2);

square1(['C3', 'E3', 'G3', 'C4'])
    .timing(1/16);

square2(['C3', 'E3', 'G3', 'C4'])
    .timing(1/16);

triangle(['A3', 'C3', 'E3', 'A4'])
    .timing(1/16);
    
triangle([, 'C3', 'E3', 'G3', 'C4'])
    .timing(1/16);

noise([4, 6, 4, 6])
    .mode(1)
    .timing(1/4);

song.loop()
    .done();
