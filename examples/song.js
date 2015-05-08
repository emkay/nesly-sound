var Song = require('../');

var song = Song();

var note = song.note;
var square1 = song.square1;
var square2 = song.square2;
var triangle = song.triangle;
var noise = song.noise;

var A3 = note('A3');
var C3 = note('C3');
var E3 = note('E3');
var A4 = A3.perfectOctave();

var A7 = note('A7');
var C7 = note('C7');
var E7 = note('E7');
//var A8 = A7.perfectOctave();

square1([A3, C3, E3, A4])
    .duty(50)
    .blip()
    .loop(4);

square1([A7, C7, E7, 'A8'])
    .timing(1/4);

square2([C3, E3, 'G3', 'C4'])
    .loop(2);

triangle(['C3', 'E3', 'G3', 'C4'])
    .loop(2);

noise(['$04', '$06', '$04', '$06'])
    .loop(2);

song.done();
song.write();
