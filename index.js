var fs = require('fs');
var bootstrap = fs.readFileSync('./bootstrap.s');

var out = bootstrap;

console.log(out.toString());
