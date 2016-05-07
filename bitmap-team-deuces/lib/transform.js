'use strict';

module.exports = (function() {
  const invert = function(colorTable, callback) {
    let prevIndex = 0;
    const increment = 4;

    if (!Buffer.isBuffer(colorTable)) {
      return callback(new Error('no buffer provided'));
    }
    
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

  return {
    invert: invert
  };

})();
