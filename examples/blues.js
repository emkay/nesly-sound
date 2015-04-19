var neslySound = require('../');
var Song = neslySound.Song;
var write = neslySound.write;

var music = [
    'C3', 'E3', 'G3', 'C4',
    'C3', 'E3', 'G3', 'C4',

    'C3', 'E3', 'G3', 'C4',
    'C3', 'E3', 'G3', 'C4',

    'C3', 'E3', 'G3', 'C4',
    'C3', 'E3', 'G3', 'C4',

    'C3', 'E3', 'G3', 'C4',
    'C3', 'E3', 'G3', 'C4',

    'F3', 'A3', 'C3', 'F4', 
    'F3', 'A3', 'C3', 'F4', 

    'F3', 'A3', 'C3', 'F4', 
    'F3', 'A3', 'C3', 'F4', 

    'C3', 'E3', 'G3', 'C4',
    'C3', 'E3', 'G3', 'C4',
    
    'C3', 'E3', 'G3', 'C4',
    'C3', 'E3', 'G3', 'C4',

    'G3', 'B3', 'D3', 'G4',
    'G3', 'B3', 'D3', 'G4',
    
    'G3', 'B3', 'D3', 'G4',
    'G3', 'B3', 'D3', 'G4',

    'C3', 'E3', 'G3', 'C4',
    'C3', 'E3', 'G3', 'C4',

    'C3', 'E3', 'G3', 'C4',
    'C3', 'E3', 'G3', 'C4'
];

var triMusic = [
    'C7', 'E7', 'G7', 'C8',
    'C7', 'E7', 'G7', 'C8',

    'F2', 'F2', 'F2', 'F2',
    'F2', 'F2', 'F2', 'F2',
    'C2', 'C2', 'C2', 'C2',
    'C2', 'C2', 'C2', 'C2',

    'G2', 'G2', 'G2', 'G2',
    'G2', 'G2', 'G2', 'G2',
    'C2', 'C2', 'C2', 'C2',
    'C2', 'C2', 'C2', 'C2'
];

var drums = [
    '$04', '$06', '$04', '$06',
    '$04', '$06', '$04', '$06',
    '$04', '$06', '$04', '$06',
    '$04', '$06', '$04', '$06',

    '$02', '$05', '$03', '$05',
    '$02', '$05', '$03', '$05',
    '$02', '$05', '$03', '$05',
    '$02', '$05', '$03', '$05',

    '$04', '$06', '$04', '$06',
    '$04', '$06', '$04', '$06',
    '$04', '$06', '$04', '$06',
    '$04', '$06', '$04', '$06'
];

var song = new Song();

song.square1(music, 1/32);
song.square2(music, 1/32);
song.triangle(music, 1/32);

song.square1(music, 1/32);
song.square2(music, 1/32);
song.triangle(music, 1/32);

song.square1(music, 1/32);
song.square2(music, 1/32);
song.triangle(music, 1/32);

song.square1(music, 1/32);
song.square2(music, 1/32);
song.triangle(music, 1/32);

song.noise(drums, 1/4);

song.compile();
write();
