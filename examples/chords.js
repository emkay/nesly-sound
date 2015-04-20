var Song = require('../');

var music = [
    'C5', 'E5', 'G5', 'C6',
    'C5', 'E5', 'G5', 'C6',
    'C5', 'E5', 'G5', 'C6',
    'C5', 'E5', 'G5', 'C6',

    'C5', 'E5', 'G5', 'C6',
    'C5', 'E5', 'G5', 'C6',
    'C5', 'E5', 'G5', 'C6',
    'C5', 'E5', 'G5', 'C6',

    'C5', 'E5', 'G5', 'C6',
    'C5', 'E5', 'G5', 'C6',
    'C5', 'E5', 'G5', 'C6',
    'C5', 'E5', 'G5', 'C6',
    
    'C5', 'E5', 'G5', 'C6',
    'C5', 'E5', 'G5', 'C6',
    'C5', 'E5', 'G5', 'C6',
    'C5', 'E5', 'G5', 'C6'
];

var noiseMusic = [
    '$06', '$01', '$06', '$01',
    '$06', '$01', '$06', '$01',
    '$06', '$01', '$06', '$01',
    '$06', '$01', '$06', '$01',

    '$06', '$01', '$06', '$01',
    '$06', '$01', '$06', '$01',
    '$06', '$01', '$06', '$01',
    '$06', '$01', '$06', '$01',

    '$06', '$01', '$06', '$01',
    '$06', '$01', '$06', '$01',
    '$06', '$01', '$06', '$01',
    '$06', '$01', '$06', '$01',

    '$06', '$01', '$06', '$01',
    '$06', '$01', '$06', '$01',
    '$06', '$01', '$06', '$01',
    '$06', '$01', '$06', '$01'
];

var music2 = [
    'Eb4', 'G4', 'Bb4', 'Eb5',
    'Eb4', 'G4', 'Bb4', 'Eb5',
    'Eb4', 'G4', 'Bb4', 'Eb5',
    'Eb4', 'G4', 'Bb4', 'Eb5',

    'Eb4', 'G4', 'Bb4', 'Eb5',
    'Eb4', 'G4', 'Bb4', 'Eb5',
    'Eb4', 'G4', 'Bb4', 'Eb5',
    'Eb4', 'G4', 'Bb4', 'Eb5',

    'Eb4', 'G4', 'Bb4', 'Eb5',
    'Eb4', 'G4', 'Bb4', 'Eb5',
    'Eb4', 'G4', 'Bb4', 'Eb5',
    'Eb4', 'G4', 'Bb4', 'Eb5',

    'Eb4', 'G4', 'Bb4', 'Eb5',
    'Eb4', 'G4', 'Bb4', 'Eb5',
    'Eb4', 'G4', 'Bb4', 'Eb5',
    'Eb4', 'G4', 'Bb4', 'Eb5'
];

var song = Song();
var square1 = song.square1;
var square2 = song.square2;
var triangle = song.triangle;
var noise = song.noise;

square1(music).timing(1/32);
square2(music).timing(1/32);
triangle(music).timing(1/32);

square1(music2).timing(1/32);
square2(music2).timing(1/32);
triangle(music2).timing(1/32);

square1(music).timing(1/32);
square2(music).timing(1/32);
triangle(music).timing(1/32);

square1(music2).timing(1/32);
square2(music2).timing(1/32);
triangle(music2).timing(1/32);

noise(noiseMusic).timing(1/8);

song.loop()
    .done();

song.write();
