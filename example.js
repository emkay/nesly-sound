var Song = require('./');
var squareMusic = [
    'B2', 'D3', 'F3', 'Gs3',
    'B3', 'D4', 'F4', 'Gs4',
    'B4', 'D5', 'F5', 'Gs5',
    'B5', 'D6', 'F6', 'Gs6'
];

var squareMusicPart2 = [
    'Bb2', 'Db3', 'E3', 'G3',
    'Bb3', 'Db4', 'E4', 'G4',
    'Bb4', 'Db5', 'E5', 'G5',
    'Bb5', 'Db6', 'E6', 'G6'
];

var square2Music = [
    'Gs5', 'F5', 'D5', 'Gs5',
    'F5', 'D5', 'B4', 'F5',
    'D5', 'B4', 'Gs4', 'D5',
    'B4', 'Gs4', 'F4', 'B4'
];

var song = new Song();

song.square1(squareMusic);
song.square1(squareMusicPart2);

song.square2(square2Music);

song.triangle(squareMusic);
song.noise(squareMusic);

song.compile();
