'use strict';

module.exports = (function() {
  const invert = function(colorTableBuf, callback) {
    console.log('starting invert');
    console.log(colorTableBuf.length);
    let prevIndex = 0;
    //let newColorTable = new Buffer(colorTableBuf.length);
    for (let i = 4; i < 9; i += 4){
      const b = colorTableBuf.slice(prevIndex, i);
      console.log('b', b);
      // let smallerIndex = 0;
      // let newSmallerBuffer = new Buffer(b.length);
      for (let color of b.entries()) {
        color[1] = 255 - color[1];
        b[color[0]] = color[1];

        console.log('color', color);
        // newSmallerBuffer.writeInt8(color, smallerIndex);
        // smallerIndex++;
      }
      // newColorTable.write32IntLE();
      prevIndex = i;
    }
    callback(colorTableBuf);
  };

  return {
    invert: invert
  };

})();
