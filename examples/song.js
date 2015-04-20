var Song = require('../');

var song = Song();
square1 = song.square1;
square2 = song.square2;
triangle = song.triangle;
noise = song.noise;

square1(['A3', 'C3', 'E3', 'A4'])
    .timing(1/16);

square1(['C3', 'E3', 'G3', 'C4'])
    .timing(1/16);

square2(['C3', 'E3', 'G3', 'C4'])
    .timing(1/16);

triangle(['A3', 'C3', 'E3', 'A4'])
    .timing(1/16);
    
triangle(['C3', 'E3', 'G3', 'C4'])
    .timing(1/16);

noise([4, 6, 4, 6])
    .timing(1/4);

song.loop()
    .done();

song.write();
