'use strict';

const transform = require('./lib/transform');
const fs = require('fs');

fs.readFile(__dirname + '/img/bitmap1.bmp', function(err, data) {
  console.log(data.toString('utf8', 0, 2));
  console.log(data.readInt16LE(2));

  const pixelOffset = data.readInt32LE(10);
  const pixelArray = data.slice(pixelOffset);
  console.log(pixelArray[pixelOffset, 4]);
});
