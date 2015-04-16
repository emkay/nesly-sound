var neslySound = require('../');
var Song = neslySound.Song;
var write = neslySound.write;

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
    'rest'
];

var song = new Song();

song.length('d_sixteenth');
song.square1(squareMusic);
song.square2(square2Music);
song.triangle(triMusic);
song.noise(noiseMusic);

song.compile();
write();
