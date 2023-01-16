var fs = require('fs');
var xml2js = require('xml2js');

var xml = fs.readFileSync('PEMetadata_sample.xml','utf16le');

var json;
xml2js.parseString(xml,function(error,result){
    if(error){
        console.log(error.message);
    }
    else{
        json = result
    }
})

console.log(json);

let data = JSON.stringify({aaa:json},null,'')
fs.writeFileSync('test.json',data);