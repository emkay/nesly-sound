volume_envelopes:
    .word se_short_staccato
    .word se_fade_in
    .word se_blip
    .word se_drum_decay
    .word se_middle
    .word se_off

se_short_staccato:
    .byte $0F, $0E, $0D, $0C, $09, $05, $00
    .byte $FF

se_fade_in:
    .byte $01, $01, $02, $02, $03, $03, $04, $04, $07, $07
    .byte $08, $08, $0A, $0A, $0C, $0C, $0D, $0D, $0E, $0E
    .byte $0F, $0F
    .byte $FF

se_blip:
    .byte $0D, $0D, $0D, $0C, $0B, $00, $00, $00, $00, $00
    .byte $00, $00, $00, $00, $06, $06, $06, $05, $04, $00
    .byte $FF

se_drum_decay:
    .byte $0E, $09, $08, $06, $04, $03, $02, $01, $00
    .byte $FF

se_middle:
    .byte $0A
    .byte $FF

se_off:
    .byte $00
    .byte $FF

ve_short_staccato = $00
ve_fade_in = $01
ve_blip = $02
ve_drum_decay = $03
ve_middle = $04
ve_on = $04
ve_off = $05
