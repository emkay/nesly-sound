;NTSC Period Lookup Table.  Thanks Celius!
;http://www.freewebs.com/the_bott/NotesTableNTSC.txt
note_table:
    .word                                                                $07F1, $0780, $0713 ; A1-B1 ($00-$02)
    .word $06AD, $064D, $05F3, $059D, $054D, $0500, $04B8, $0475, $0435, $03F8, $03BF, $0389 ; C2-B2 ($03-$0E)
    .word $0356, $0326, $02F9, $02CE, $02A6, $027F, $025C, $023A, $021A, $01FB, $01DF, $01C4 ; C3-B3 ($0F-$1A)
    .word $01AB, $0193, $017C, $0167, $0151, $013F, $012D, $011C, $010C, $00FD, $00EF, $00E2 ; C4-B4 ($1B-$26)
    .word $00D2, $00C9, $00BD, $00B3, $00A9, $009F, $0096, $008E, $0086, $007E, $0077, $0070 ; C5-B5 ($27-$32)
    .word $006A, $0064, $005E, $0059, $0054, $004F, $004B, $0046, $0042, $003F, $003B, $0038 ; C6-B6 ($33-$3E)
    .word $0034, $0031, $002F, $002C, $0029, $0027, $0025, $0023, $0021, $001F, $001D, $001B ; C7-B7 ($3F-$4A)
    .word $001A, $0018, $0017, $0015, $0014, $0013, $0012, $0011, $0010, $000F, $000E, $000D ; C8-B8 ($4B-$56)
    .word $000C, $000C, $000B, $000A, $000A, $0009, $0008                                    ; C9-F#9 ($57-$5D)
    .word $0000 ;rest

;Note: octaves in music traditionally start at C, not A
A0 = $00    ;the "1" means Octave 1
As0 = $01   ;the "s" means "sharp"
Bb0 = $01   ;the "b" means "flat"  A# == Bb, so same value
B0 = $02

C1 = $03
Cs1 = $04
Db1 = $04
D1 = $05
Ds1 = $06
Eb1 = $06
E1 = $07
F1 = $08
Fs1 = $09
Gb1 = $09
G1 = $0A
Gs1 = $0B
Ab1 = $0B
A1 = $0C
As1 = $0D
Bb1 = $0D
B1 = $0E

C2 = $0F
Cs2 = $10
Db2 = $10
D2 = $11
Ds2 = $12
Eb2 = $12
E2 = $13
F2 = $14
Fs2 = $15
Gb2 = $15
G2 = $16
Gs2 = $17
Ab2 = $17
A2 = $18
As2 = $19
Bb2 = $19
B2 = $1a

C3 = $1b
Cs3 = $1c
Db3 = $1c
D3 = $1d
Ds3 = $1e
Eb3 = $1e
E3 = $1f
F3 = $20
Fs3 = $21
Gb3 = $21
G3 = $22
Gs3 = $23
Ab3 = $23
A3 = $24
As3 = $25
Bb3 = $25
B3 = $26

C4 = $27
Cs4 = $28
Db4 = $28
D4 = $29
Ds4 = $2a
Eb4 = $2a
E4 = $2b
F4 = $2c
Fs4 = $2d
Gb4 = $2d
G4 = $2e
Gs4 = $2f
Ab4 = $2f
A4 = $30
As4 = $31
Bb4 = $31
B4 = $32

C5 = $33
Cs5 = $34
Db5 = $34
D5 = $35
Ds5 = $36
Eb5 = $36
E5 = $37
F5 = $38
Fs5 = $39
Gb5 = $39
G5 = $3a
Gs5 = $3b
Ab5 = $3b
A5 = $3c
As5 = $3d
Bb5 = $3d
B5 = $3e

C6 = $3f
Cs6 = $40
Db6 = $40
D6 = $41
Ds6 = $42
Eb6 = $42
E6 = $43
F6 = $44
Fs6 = $45
Gb6 = $45
G6 = $46
Gs6 = $47
Ab6 = $47
A6 = $48
As6 = $49
Bb6 = $49
B6 = $4a

C7 = $4b
Cs7 = $4c
Db7 = $4c
D7 = $4d
Ds7 = $4e
Eb7 = $4e
E7 = $4f
F7 = $50
Fs7 = $51
Gb7 = $51
G7 = $52
Gs7 = $53
Ab7 = $53
A7 = $54
As7 = $55
Bb7 = $55
B7 = $56

C8 = $57
Cs8 = $58
Db8 = $58
D8 = $59
Ds8 = $5a
Eb8 = $5a
E8 = $5b
F8 = $5c
Fs8 = $5d
Gb8 = $5d

rest = $5e
