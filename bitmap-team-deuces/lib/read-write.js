'use strict';

const fs = require('fs');

fs.readFile(__dirname + '/../img/bitmap1.bmp', function(err, data) {
  console.log(data, 'utf-8');
});
// 
// function decode(){
//
// }
