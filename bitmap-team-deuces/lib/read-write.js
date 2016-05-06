'use strict';

const fs = require('fs');
//__dirname + '/../img/bitmap1.bmp'

exports.readFile = function(path1){
  fs.readFile(path1, function(err, data) {
    console.log(data);
  });
};

//__dirname + '/../img/transformed.bmp'
exports.writeFile = function(path2, buffer){
  fs.writeFile(path2,buffer,function(err){
    if(err) throw err;
    console.log('created file named transformed.bmp');
  });
};
