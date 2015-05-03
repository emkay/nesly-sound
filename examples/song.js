var Song = require('../');

var song = Song();
var notes = song.notes;
square1 = song.square1;
square2 = song.square2;
triangle = song.triangle;
noise = song.noise;


square1(['A3', 'C3', 'E3', 'A4'])
    .duty(50)
    .blip()
    .loop(4);

square1(['A7', 'C7', 'E7', 'A8'])
    .timing(1/4);

square2(['C3', 'E3', 'G3', 'C4'])
    .loop(2);

triangle(['C3', 'E3', 'G3', 'C4'])
    .loop(2);

noise(['$04', '$06', '$04', '$06'])
    .loop(2);

song.done();
song.write();
