'use strict';

module.exports = (function() {
  const invert = function(colorTableBuf, callback) {
    let prevIndex = 0;
    for (var i = 4; i < colorTableBuf.length; i += 4){
      const b = colorTableBuf.slice(prevIndex, i);
      console.log('orig b', b);
      for (var color in b.values()) {
        color = 255 - color;
      }
      console.log('new b', b);
      prevIndex = i;
    }
    return callback(colorTableBuf);
  };

  return {
    invert: invert
  };

})();
