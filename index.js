var fs = require('fs');
var bootstrap = fs.readFileSync('./bootstrap.s');

var out = bootstrap;

function square(notes) {
    var s = notes.join(',');
    out += '\t.byte: ' + s;
}

function compile() {
    console.log(out.toString());
}

module.exports = {
    square: square,
    compile: compile
};
