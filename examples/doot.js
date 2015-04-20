var Song = require('../');

var squareMusic = [
    'Ab2', 'F2', 'C2', 'G2',
    'Ab2', 'F2', 'C2', 'G2',
    'Ab2', 'F2', 'C2', 'G2',
    'Ab2', 'F2', 'C2', 'G2',

    'Ab3', 'F3', 'C3', 'G3',
    'Ab3', 'F3', 'C3', 'G3',
    'Ab3', 'F3', 'C3', 'G3',
    'Ab3', 'F3', 'C3', 'G3',

    'Ab5', 'F5', 'C5', 'G5',
    'Ab5', 'F5', 'C5', 'G5',
    'Ab5', 'F5', 'C5', 'G5',
    'Ab5', 'F5', 'C5', 'G5'
];

var square2Music = [
    'Ab3', 'F2', 'C4', 'G2',
    'Ab3', 'F2', 'C4', 'G2',
    'Ab3', 'F2', 'C4', 'G2',
    'Ab3', 'F2', 'C4', 'G2',

    'Ab4', 'F3', 'C5', 'G3',
    'Ab4', 'F3', 'C3', 'G3',
    'Ab4', 'F3', 'C5', 'G3',
    'Ab4', 'F3', 'C3', 'G3',

    'Ab5', 'F2', 'C4', 'G3',
    'Ab5', 'F2', 'C4', 'G3',
    'Ab5', 'F2', 'C4', 'G4',
    'Ab5', 'F2', 'C4', 'G4',

    'Ab3', 'F2', 'C4', 'G2',
    'Ab3', 'F2', 'C4', 'G2',
    'Ab3', 'F2', 'C4', 'G2',
    'Ab3', 'F2', 'C4', 'G2',

    'Ab4', 'F3', 'C5', 'G3',
    'Ab4', 'F3', 'C3', 'G3',
    'Ab4', 'F3', 'C5', 'G3',
    'Ab4', 'F3', 'C3', 'G3',

    'Ab5', 'F2', 'C4', 'G3',
    'Ab5', 'F2', 'C4', 'G3',
    'Ab5', 'F2', 'C4', 'G4',
    'Ab5', 'F2', 'C4', 'G4'

];

var triMusic = [
    'Ab2', 'F4', 'C2', 'G2',
    'Ab2', 'F4', 'C2', 'G2',
    'Ab2', 'F4', 'C2', 'G2',
    'Ab2', 'F4', 'C2', 'G2',

    'Ab3', 'F3', 'C3', 'G3',
    'Ab3', 'F3', 'C2', 'G3',
    'Ab3', 'F3', 'C2', 'G3',
    'Ab3', 'F3', 'C3', 'G3',

    'Ab2', 'F5', 'C5', 'G5',
    'Ab2', 'F5', 'C4', 'G3',
    'Ab2', 'F5', 'C4', 'G3',
    'Ab2', 'F5', 'C5', 'G5',

    'Ab2', 'F4', 'C2', 'G2',
    'Ab2', 'F4', 'C2', 'G2',
    'Ab2', 'F4', 'C2', 'G2',
    'Ab2', 'F4', 'C2', 'G2',

    'Ab3', 'F3', 'C3', 'G3',
    'Ab3', 'F3', 'C2', 'G3',
    'Ab3', 'F3', 'C2', 'G3',
    'Ab3', 'F3', 'C3', 'G3',

    'Ab2', 'F5', 'C5', 'G5',
    'Ab2', 'F5', 'C4', 'G3',
    'Ab2', 'F5', 'C4', 'G3',
    'Ab2', 'F5', 'C5', 'G5'
];

var noiseMusic = [
    'Ab2', 'F4', 'C2', 'G2',
    'Ab2', 'F4', 'C2', 'G2',
    'Ab2', 'F4', 'C2', 'G2',
    'Ab2', 'F4', 'C2', 'G2',
    'Ab2', 'F4', 'C2', 'G2',
    'Ab2', 'F4', 'C2', 'G2'
];

var song = Song();

song.square1(squareMusic).timing(1/16);
song.square2(square2Music).timing(1/16);
song.triangle(triMusic).timing(1/16);
song.noise(noiseMusic).timing(1/16);

song.done();
song.write();
