var neslySound = require('../');
var Song = neslySound.Song;
var write = neslySound.write;

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
    'rest', 'rest', 'rest', 'rest'
];

var song = new Song();
var song2 = new Song();

song.square1(squareMusic);
song.square2(square2Music);
song.triangle(triMusic);
song.noise(noiseMusic);

var song2Music = [
    'Ab2', 'F2', 'C2', 'G2',
    'Ab2', 'F2', 'C2', 'G2',
    'Ab2', 'F2', 'C2', 'G2',
    'Ab2', 'F2', 'C2', 'G2'
];

song2.square1(song2Music);
song2.square2(song2Music);
song2.triangle(song2Music);
song.noise(song2Music);

song.compile();
song2.compile();
write();
