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
	.byte $00
	.byte NOISE
	.byte $75
	.word song0_noise

song0_square1:
	.byte Ab2,F2,C2,G2,Ab2,F2,C2,G2,Ab2,F2,C2,G2,Ab2,F2,C2,G2,Ab3,F3,C3,G3,Ab3,F3,C3,G3,Ab3,F3,C3,G3,Ab3,F3,C3,G3,Ab5,F5,C5,G5,Ab5,F5,C5,G5,Ab5,F5,C5,G5,Ab5,F5,C5,G5,Ab2,F2,C2,G2,Ab2,F2,C2,G2,Ab2,F2,C2,G2,Ab2,F2,C2,G2
	.byte $FF
song0_square2:
	.byte Ab3,F2,C4,G2,Ab3,F2,C4,G2,Ab3,F2,C4,G2,Ab3,F2,C4,G2,Ab4,F3,C5,G3,Ab4,F3,C3,G3,Ab4,F3,C5,G3,Ab4,F3,C3,G3,Ab5,F2,C4,G3,Ab5,F2,C4,G3,Ab5,F2,C4,G4,Ab5,F2,C4,G4,Ab3,F2,C4,G2,Ab3,F2,C4,G2,Ab3,F2,C4,G2,Ab3,F2,C4,G2,Ab4,F3,C5,G3,Ab4,F3,C3,G3,Ab4,F3,C5,G3,Ab4,F3,C3,G3,Ab5,F2,C4,G3,Ab5,F2,C4,G3,Ab5,F2,C4,G4,Ab5,F2,C4,G4
	.byte $FF
song0_tri:
	.byte Ab2,F4,C2,G2,Ab2,F4,C2,G2,Ab2,F4,C2,G2,Ab2,F4,C2,G2,Ab3,F3,C3,G3,Ab3,F3,C2,G3,Ab3,F3,C2,G3,Ab3,F3,C3,G3,Ab2,F5,C5,G5,Ab2,F5,C4,G3,Ab2,F5,C4,G3,Ab2,F5,C5,G5,Ab2,F4,C2,G2,Ab2,F4,C2,G2,Ab2,F4,C2,G2,Ab2,F4,C2,G2,Ab3,F3,C3,G3,Ab3,F3,C2,G3,Ab3,F3,C2,G3,Ab3,F3,C3,G3,Ab2,F5,C5,G5,Ab2,F5,C4,G3,Ab2,F5,C4,G3,Ab2,F5,C5,G5
	.byte $FF
song0_noise:
	.byte rest,rest,rest,rest
	.byte $FF

