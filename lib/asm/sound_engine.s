SQUARE_1 = $00 ;these are channel constants
SQUARE_2 = $01
TRIANGLE = $02
NOISE = $03

MUSIC_SQ1 = $00 ;these are stream # constants
MUSIC_SQ2 = $01 ;stream # is used to index into variables
MUSIC_TRI = $02
MUSIC_NOI = $03
SFX_1     = $04
SFX_2     = $05

    .rsset $0300 ;sound engine variables will be on the $0300 page of RAM
    
sound_disable_flag  .rs 1   ;a flag variable that keeps track of whether the sound engine is disabled or not. 
sound_temp1 .rs 1           ;temporary variables
sound_temp2 .rs 1
sound_frame_counter .rs 1   ;a primitive counter used to time notes in this demo

;reserve 6 bytes, one for each stream
stream_curr_sound .rs 6     ;current song/sfx loaded
stream_status .rs 6         ;status byte.   bit0: (1: stream enabled; 0: stream disabled)
stream_channel .rs 6        ;what channel is this stream playing on?
stream_ptr_LO .rs 6         ;low byte of pointer to data stream
stream_ptr_HI .rs 6         ;high byte of pointer to data stream
stream_vol_duty .rs 6       ;stream volume/duty settings
stream_note_LO .rs 6        ;low 8 bits of period for the current note on a stream
stream_note_HI .rs 6        ;high 3 bits of period for the current note on a stream 
    
sound_init:
    lda #$0F
    sta $4015   ;enable Square 1, Square 2, Triangle and Noise channels
    
    lda #$00
    sta sound_disable_flag  ;clear disable flag
    ;later, if we have other variables we want to initialize, we will do that here.
    sta sound_frame_counter
se_silence:
    lda #$30
    sta $4000   ;set Square 1 volume to 0
    sta $4004   ;set Square 2 volume to 0
    sta $400C   ;set Noise volume to 0
    lda #$80
    sta $4008   ;silence Triangle
    
    rts
    
sound_disable:
    lda #$00
    sta $4015   ;disable all channels
    lda #$01
    sta sound_disable_flag  ;set disable flag
    rts
    
;-------------------------------------
; load_sound will prepare the sound engine to play a song or sfx.
;   input:
;       A: song/sfx number to play
sound_load:
    sta sound_temp1         ;save song number
    asl a                   ;multiply by 2.  We are indexing into a table of pointers (words)
    tay
    lda song_headers, y     ;setup the pointer to our song header
    sta sound_ptr
    lda song_headers+1, y
    sta sound_ptr+1
    
    ldy #$00
    lda [sound_ptr], y      ;read the first byte: # streams
    sta sound_temp2         ;store in a temp variable.  We will use this as a loop counter: how many streams to read stream headers for
    iny
.loop:
    lda [sound_ptr], y      ;stream number
    tax                     ;stream number acts as our variable index
    iny
    
    lda [sound_ptr], y      ;status byte.  1= enable, 0=disable
    sta stream_status, x
    beq .next_stream        ;if status byte is 0, stream disabled, so we are done
    iny
    
    lda [sound_ptr], y      ;channel number
    sta stream_channel, x
    iny
    
    lda [sound_ptr], y      ;initial duty and volume settings
    sta stream_vol_duty, x
    iny
    
    lda [sound_ptr], y      ;pointer to stream data.  Little endian, so low byte first
    sta stream_ptr_LO, x
    iny
    
    lda [sound_ptr], y
    sta stream_ptr_HI, x
.next_stream:
    iny
    
    lda sound_temp1         ;song number
    sta stream_curr_sound, x
    
    dec sound_temp2         ;our loop counter
    bne .loop
    rts

;--------------------------
; sound_play_frame advances the sound engine by one frame
sound_play_frame:
    lda sound_disable_flag
    bne .done   ;if disable flag is set, don't advance a frame
    
    inc sound_frame_counter     
    lda sound_frame_counter
    cmp #$0C    ;***change this compare value to make the notes play faster or slower***
    bne .done   ;only take action once every 12 frames.
    
    jsr se_silence  ;silence all channels.  se_set_apu will set volume later for all channels that are enabled.
                    ;the purpose of this subroutine call is to silence channels that aren't used by any streams.
    
    ldx #$00
.loop:
    lda stream_status, x
    and #$01    ;check whether the stream is active
    beq .endloop  ;if the channel isn't active, skip it
    jsr se_fetch_byte
    jsr se_set_apu
.endloop:
    inx
    cpx #$06
    bne .loop
    
    lda #$00
    sta sound_frame_counter ;reset frame counter so we can start counting to 12 again.  
.done:
    rts

;--------------------------
; se_fetch_byte reads one byte from a sound data stream and handles it
;   input: 
;       X: stream number    
se_fetch_byte:
    lda stream_ptr_LO, x
    sta sound_ptr
    lda stream_ptr_HI, x
    sta sound_ptr+1
    
    ldy #$00
    lda [sound_ptr], y
    bpl .note                ;if < #$80, it's a Note
    cmp #$A0
    bcc .note_length         ;else if < #$A0, it's a Note Length
.opcode:                     ;else it's an opcode
    ;do Opcode stuff
    cmp #$FF
    bne .end
    lda stream_status, x    ;if $FF, end of stream, so disable it and silence
    and #%11111110
    sta stream_status, x    ;clear enable flag in status byte
    
    lda stream_channel, x
    cmp #TRIANGLE
    beq .silence_tri        ;triangle is silenced differently from squares and noise
    lda #$30                ;squares and noise silenced with #$30
    bne .silence
.silence_tri:
    lda #$80                ;triangle silenced with #$80
.silence:
    sta stream_vol_duty, x  ;store silence value in the stream's volume variable.
    jmp .update_pointer     ;done
.note_length:
    ;do Note Length stuff
    jmp .update_pointer    ;not implemented yet
.note:
    ;do Note stuff
    sty sound_temp1     ;save our index into the data stream
    asl a
    tay
    lda note_table, y
    sta stream_note_LO, x
    lda note_table+1, y
    sta stream_note_HI, x
    ldy sound_temp1     ;restore data stream index
    
.update_pointer:
    iny
    tya
    clc
    adc stream_ptr_LO, x
    sta stream_ptr_LO, x
    bcc .end
    inc stream_ptr_HI, x
.end:
    rts

;--------------------------
; se_set_apu writes a stream's data to the APU ports
;   input: 
;       X: stream number
se_set_apu:
    lda stream_channel, x
    asl a
    asl a                   ;multiply by 4 so our index will point to the right set of registers
    tay
    lda stream_vol_duty, x
    sta $4000, y
    lda stream_note_LO, x
    sta $4002, y
    lda stream_note_HI, x
    sta $4003, y
    
    lda stream_channel, x
    cmp #TRIANGLE
    bcs .end        ;if Triangle or Noise, skip this part
    lda #$08        ;else, set negate flag in sweep unit to allow low noteson Squares
    sta $4001, y
.end:
    rts
    
NUM_SONGS = $04 ;if you add a new song, change this number.    
                ;headers.asm checks this number in its song_up and song_down subroutines
                ;to determine when to wrap around.

;this is our pointer table.  Each entry is a pointer to a song header                
song_headers:
    .word song0_header  ;this is a silence song.  See song0.i for more details
    ;.word song1_header  ;evil, demented notes
    ;.word song2_header  ;a sound effect.  Try playing it over the other songs.
    ;.word song3_header  ;a little chord progression.
    
    .include "note_table.i" ;period lookup table for notes
    .include "song0.i"  ;holds the data for song 0 (header and data streams)
    ;.include "song1.i"  ;holds the data for song 1
    ;.include "song2.i"
    ;.include "song3.i"
