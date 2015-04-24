var Song = require('../');

var song = Song();
square1 = song.square1;
square2 = song.square2;
triangle = song.triangle;
noise = song.noise;

square1(['A3', 'C3', 'E3', 'A4'])
    .timing(1/4)
    .loop(2);

square2(['C3', 'E3', 'G3', 'C4'])
    .timing(1/4)
    .loop(2);
    
triangle(['C3', 'E3', 'G3', 'C4'])
    .timing(1/4)
    .loop(2);

noise(['$04', '$06', '$04', '$06'])
    .timing(1/4)
    .loop(2);

song.done();
song.write();
