'use strict';

const transform = require('./lib/transform');
const fs = require('fs');

fs.readFile(__dirname + '/img/bitmap1.bmp', function(err, data) {
  //console.log(data.toString('utf8', 0, 2));
  console.log(data.slice(54, 58));
  console.log(data.slice(58, 62));
  console.log(data.slice(62, 66));
  console.log(data.slice(66, 70));
  console.log(data.slice(70, 74));
  console.log(data.slice(74, 78));
  console.log(data.slice(78, 82));

  let prevIndex = 54;
  for (var i = 58; i < 1071; i += 4) {
    const b = data.slice(prevIndex, i);
    console.log(b);

    prevIndex = i;
  }

});
