'use strict';

const fs = require('fs');
const parse = require(__dirname + '/parse');
//__dirname + '/../img/bitmap1.bmp'

exports.readFile = function(parse){
  console.log('stepped in to readfile()');
  fs.readFile(__dirname + '/../img/bitmap1.bmp', function(err, data) {
    parse(data);
  });
};

//__dirname + '/../img/transformed.bmp'

exports.writeFile = function(path2, buffer){
  fs.writeFile(path2,buffer,function(err){
    if(err) throw err;
    console.log('created file named transformed.bmp');
  });
};
