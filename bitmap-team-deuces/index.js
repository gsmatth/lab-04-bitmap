'use strict';

const transform = require('./lib/transform');
const fs = require('fs');

const colorTableBuf = new Buffer([100, 45, 75, 8, 40, 89, 170, 0]);
let newColors;
transform.invert(colorTableBuf, (newBuff) => {
  newColors = newBuff;
  console.log('old colors', colorTableBuf);
  console.log('new colors', newColors);
});
