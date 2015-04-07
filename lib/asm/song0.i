song0_header:
	.byte $04
	.byte MUSIC_SQ1
	.byte $01
	.byte SQUARE_1
	.byte $77
	.word song0_square1
	.byte MUSIC_SQ2
	.byte $01
	.byte SQUARE_2
	.byte $B7
	.word song0_square2
	.byte MUSIC_TRI
	.byte $01
	.byte TRIANGLE
	.byte $81
	.word song0_tri
	.byte MUSIC_NOI
	.byte $01
	.byte NOISE
	.byte $75
	.word song0_noise

song0_square1:
	.byte B2,D3,F3,Gs3,B3,D4,F4,Gs4,B4,D5,F5,Gs5,B5,D6,F6,Gs6
	.byte Bb2,Db3,E3,G3,Bb3,Db4,E4,G4,Bb4,Db5,E5,G5,Bb5,Db6,E6,G6
	.byte $FF
song0_square2:
	.byte Gs5,F5,D5,Gs5,F5,D5,B4,F5,D5,B4,Gs4,D5,B4,Gs4,F4,B4
	.byte $FF
song0_tri:
	.byte B2,D3,F3,Gs3,B3,D4,F4,Gs4,B4,D5,F5,Gs5,B5,D6,F6,Gs6
	.byte $FF
song0_noise:
	.byte B2,D3,F3,Gs3,B3,D4,F4,Gs4,B4,D5,F5,Gs5,B5,D6,F6,Gs6
	.byte $FF

