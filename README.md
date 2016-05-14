nesly-sound
===========

[![Build Status](https://travis-ci.org/emkay/nesly-sound.svg?branch=master)](https://travis-ci.org/emkay/nesly-sound)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

[![Standard Version](https://img.shields.io/badge/release-standard%20version-brightgreen.svg)](https://github.com/conventional-changelog/standard-version)

Create beautiful music on your NES

## Special Thanks

Thomas Hjelm wrote the sound engine code in 6052 asm that this project uses. If you want to learn how sound (or anything else) on the NES works check out the [Nintendo Age Forums](http://nintendoage.com/forum/messageview.cfm?catid=22&threadid=7155). Without those this wouldn't even be possible.

## Install

`npm install nesly-sound`

## Example

```javascript
var song = require('nesly-sound')();

song.square1(['C5', 'E5', 'G5', 'C6'])
    .timing(1/8);

song.done();
song.write();
```

## Methods

### .square1(notes)

### .square2(notes)

### .triangle(notes)

Takes an `Array` of notes. Notes can either be strings with the note letter and octave, or a note object created with [octavian](https://github.com/stevekinney/octavian).

### .noise(notes)

Noise is a little different. Right now it takes string values that directly map to the hex ASM values. For example, '$00' through '$1F' are valid values for noise notes.
