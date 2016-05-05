'use strict';


const fs = require('fs');
// const read = require('./lib/read-write');

fs.readFile(__dirname + '/../img/bitmap1.bmp', function(err, data) {
  const head = data.slice(0,14);
  const dib = data.slice(15, 54);
  const

  console.log(head);
  console.log(dib);

});
