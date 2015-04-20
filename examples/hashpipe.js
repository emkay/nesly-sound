var Song = require('../');

var squareMusic = [
    'A3', 'A3', 'B3', 'C3',
    'A3', 'A3', 'B3', 'C3',
    'A3', 'A3', 'B3', 'C3',
    'A3', 'A3', 'B3', 'C3',

    'A3', 'A3', 'B3', 'C3',
    'A3', 'A3', 'B3', 'C3',
    'A3', 'A3', 'B3', 'C3',
    'A3', 'A3', 'B3', 'C3',

    'Fs3', 'Fs3', 'Fs3', 'Fs3',
    'Fs3', 'Fs3', 'Fs3', 'Fs3',
    'Fs3', 'Fs3', 'Fs3', 'Fs3',
    'Fs3', 'Fs3', 'Fs3', 'Fs3',

    'A3', 'A3', 'B3', 'C3',
    'A3', 'A3', 'B3', 'C3',
    'A3', 'A3', 'B3', 'C3',
    'A3', 'A3', 'B3', 'C3'
];

var square2Music = [
    'E3', 'E3', 'Fs3', 'G3',
    'E3', 'E3', 'Fs3', 'G3',
    'E3', 'E3', 'Fs3', 'G3',
    'E3', 'E3', 'Fs3', 'G3',
    
    'E3', 'E3', 'Fs3', 'G3',
    'E3', 'E3', 'Fs3', 'G3',
    'E3', 'E3', 'Fs3', 'G3',
    'E3', 'E3', 'Fs3', 'G3',

    'A4', 'A4', 'A4', 'A4',
    'A4', 'A4', 'A4', 'A4',
    'A4', 'A4', 'A4', 'A4',
    'A4', 'A4', 'A4', 'A4',
    
    'E3', 'E3', 'Fs3', 'G3',
    'E3', 'E3', 'Fs3', 'G3',
    'E3', 'E3', 'Fs3', 'G3',
    'E3', 'E3', 'Fs3', 'G3'
];

var triMusic = [
    'A1', 'A1', 'B1', 'C2',
    'A1', 'A1', 'B1', 'C2',
    'A1', 'A1', 'B1', 'C2',
    'A1', 'A1', 'B1', 'C2',
    
    'A1', 'A1', 'B1', 'C2',
    'A1', 'A1', 'B1', 'C2',
    'A1', 'A1', 'B1', 'C2',
    'A1', 'A1', 'B1', 'C2',

    'D2', 'D2', 'D2', 'D2', 
    'D2', 'D2', 'D2', 'D2', 
    'D2', 'D2', 'D2', 'D2', 
    'D2', 'D2', 'D2', 'D2', 
    
    'A1', 'A1', 'B1', 'C2',
    'A1', 'A1', 'B1', 'C2',
    'A1', 'A1', 'B1', 'C2',
    'A1', 'A1', 'B1', 'C2'
];

var noiseMusic = [
    '$04', '$1E', '$1E', '$1F',
    '$04', '$1E', '$1E', '$1F',
    '$04', '$1E', '$1E', '$1F',
    '$04', '$1E', '$1E', '$1F',
    
    '$04', '$1E', '$1E', '$1F',
    '$04', '$1E', '$1E', '$1F',
    '$04', '$1E', '$1E', '$1F',
    '$04', '$1E', '$1E', '$1F',
    
    '$04', '$1E', '$1E', '$1F',
    '$04', '$1E', '$1E', '$1F',
    '$04', '$1E', '$1E', '$1F',
    '$04', '$1E', '$1E', '$1F',
    
    '$04', '$1E', '$1E', '$1F',
    '$04', '$1E', '$1E', '$1F',
    '$04', '$1E', '$1E', '$1F',
    '$04', '$1E', '$1E', '$1F'
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
