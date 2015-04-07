var Song = require('./');
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
    'Ab2', 'F2', 'C2', 'G2',
    'Ab2', 'F2', 'C2', 'G2',
    'Ab2', 'F2', 'C2', 'G2',
    'Ab2', 'F2', 'C2', 'G2',

    'Ab3', 'F3', 'C2', 'G2',
    'Ab3', 'F3', 'C3', 'G3',
    'Ab3', 'F3', 'C3', 'G3',
    'Ab3', 'F3', 'C3', 'G3',

    'Ab5', 'F5', 'C5', 'G5',
    'Ab5', 'F5', 'C5', 'G5',
    'Ab5', 'F5', 'C5', 'G5',
    'Ab5', 'F5', 'C5', 'G5'
];

var triMusic = [
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

var noiseMusic = [
    'rest', 'rest', 'rest', 'rest'
];

var song = new Song();

song.square1(squareMusic);
song.square2(square2Music);
song.triangle(triMusic);
song.noise(noiseMusic);

song.compile();
