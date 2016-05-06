'use strict';

module.exports = (function() {
  const invert = function(colorTableBuf, callback) {
    let prevIndex = 0;
    for (var i = 4; i < 1024; i += 4){
      const b = colorTableBuf.slice(prevIndex, i);

      for (var color in b.values()) {
        color = 255 - color;
      }
      prevIndex = i;
    }
    return colorTableBuf;
  };

  return {
    invert: invert
  };

})();
