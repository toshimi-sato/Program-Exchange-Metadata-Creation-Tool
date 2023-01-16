var fs = require('fs');
var xml2json = require('xml2json');

var xml = fs.readFileSync('PEMetadata_sample.xml','utf16le');

console.log(xml);