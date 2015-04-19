var neslySound = require('../');
var Song = neslySound.Song;
var write = neslySound.write;

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

var song = new Song();

song.square1(music, 1/32);
song.square2(music, 1/32);
song.triangle(music, 1/32);

song.square1(music2, 1/32);
song.square2(music2, 1/32);
song.triangle(music2, 1/32);

song.square1(music, 1/32);
song.square2(music, 1/32);
song.triangle(music, 1/32);

song.square1(music2, 1/32);
song.square2(music2, 1/32);
song.triangle(music2, 1/32);

song.noise(noiseMusic, 1/8);

song.compile();
write();
