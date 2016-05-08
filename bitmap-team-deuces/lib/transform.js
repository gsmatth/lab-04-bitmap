'use strict';
const parse = require(__dirname + '/parse');

exports.invertColorTable = function(colorTable, callback) {
  console.log('stepped into invertColorTable in transform.js');
    let prevIndex = 0;
    const increment = 4;
    console.log('increment ' + increment);
    if (!Buffer.isBuffer(colorTable)) {
      return (new Error('no buffer provided'));
    }
    console.log('passed errors in transform function');

    for (let i = increment; i < colorTable.length + 1; i += increment){
      const b = colorTable.slice(prevIndex, i);
      for (let color of b.entries()) {
        color[1] = 255 - color[1];
        b[color[0]] = color[1];
      }
      prevIndex = i;
    }
    callback(null, colorTable);
  };

  // return {
  //   invert: invert
  // };
// };
