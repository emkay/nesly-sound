var neslySound = require('../')
var Song = neslySound.Song

var noiseMusic = [
  '$00', '$01', '$02', '$03',
  '$04', '$05', '$06', '$07',
  '$08', '$09', '$0A', '$0B',
  '$0C', '$0D', '$0E', '$0F',

  '$10', '$11', '$12', '$13',
  '$14', '$15', '$16', '$17',
  '$18', '$19', '$1A', '$1B',
  '$1C', '$1D', '$1E', '$1F'
]

var song = new Song()

song.noise(noiseMusic)

song.done()
song.write()
