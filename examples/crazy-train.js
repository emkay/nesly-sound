var Song = require('../');

var squareMusic = [
    'Fs3', 'Fs3', 'Cs4', 'Fs3',
    'D4', 'Fs3', 'Cs4', 'Fs3',
    'B4', 'A4', 'Gs3', 'A4',
    'B4', 'A4', 'Gs3', 'E3',

    'Fs3', 'Fs3', 'Cs4', 'Fs3',
    'D4', 'Fs3', 'Cs4', 'Fs3',
    'B4', 'A4', 'Gs3', 'A4',
    'B4', 'A4', 'Gs3', 'E3',
    
    'Fs3', 'Fs3', 'Cs4', 'Fs3',
    'D4', 'Fs3', 'Cs4', 'Fs3',
    'B4', 'A4', 'Gs3', 'A4',
    'B4', 'A4', 'Gs3', 'E3',
    
    'Fs3', 'Fs3', 'Cs4', 'Fs3',
    'D4', 'Fs3', 'Cs4', 'Fs3',
    'B4', 'A4', 'Gs3', 'A4',
    'B4', 'A4', 'Gs3', 'E3'
];

var square2Music = [
    'Fs3', 'Fs3', 'Cs4', 'Fs3',
    'D4', 'Fs3', 'Cs4', 'Fs3',
    'B4', 'A4', 'Gs3', 'A4',
    'B4', 'A4', 'Gs3', 'E3',

    'Fs3', 'Fs3', 'Cs4', 'Fs3',
    'D4', 'Fs3', 'Cs4', 'Fs3',
    'B4', 'A4', 'Gs3', 'A4',
    'B4', 'A4', 'Gs3', 'E3',
    
    'Fs3', 'Fs3', 'Cs4', 'Fs3',
    'D4', 'Fs3', 'Cs4', 'Fs3',
    'B4', 'A4', 'Gs3', 'A4',
    'B4', 'A4', 'Gs3', 'E3',
    
    'Fs3', 'Fs3', 'Cs4', 'Fs3',
    'D4', 'Fs3', 'Cs4', 'Fs3',
    'B4', 'A4', 'Gs3', 'A4',
    'B4', 'A4', 'Gs3', 'E3'
];

var triMusic = [
    'Fs3', 'Fs3', 'Cs4', 'Fs3',
    'D4', 'Fs3', 'Cs4', 'Fs3',
    'B4', 'A4', 'Gs3', 'A4',
    'B4', 'A4', 'Gs3', 'E3',

    'Fs3', 'Fs3', 'Cs4', 'Fs3',
    'D4', 'Fs3', 'Cs4', 'Fs3',
    'B4', 'A4', 'Gs3', 'A4',
    'B4', 'A4', 'Gs3', 'E3',
    
    'Fs3', 'Fs3', 'Cs4', 'Fs3',
    'D4', 'Fs3', 'Cs4', 'Fs3',
    'B4', 'A4', 'Gs3', 'A4',
    'B4', 'A4', 'Gs3', 'E3',
    
    'Fs3', 'Fs3', 'Cs4', 'Fs3',
    'D4', 'Fs3', 'Cs4', 'Fs3',
    'B4', 'A4', 'Gs3', 'A4',
    'B4', 'A4', 'Gs3', 'E3'
];

var noiseMusic = [
    '$04', '$06', '$04', '$06',
    '$04', '$06', '$04', '$06',
    '$04', '$06', '$04', '$06',
    '$04', '$06', '$04', '$06',
    
    '$04', '$06', '$04', '$06',
    '$04', '$06', '$04', '$06',
    '$04', '$06', '$04', '$06',
    '$04', '$06', '$04', '$06',
    
    '$04', '$06', '$04', '$06',
    '$04', '$06', '$04', '$06',
    '$04', '$06', '$04', '$06',
    '$04', '$06', '$04', '$06',
    
    '$04', '$06', '$04', '$06',
    '$04', '$06', '$04', '$06',
    '$04', '$06', '$04', '$06',
    '$04', '$06', '$04', '$06'
];

var song = Song();

var square1 = song.square1;
var square2 = song.square2;
var triangle = song.triangle;
var noise = song.noise;

square1(squareMusic).timing(1/8);
square2(square2Music).timing(1/8);
triangle(triMusic).timing(1/8);
noise(noiseMusic).timing(1/8);

song.loop()
    .done();

song.write();
