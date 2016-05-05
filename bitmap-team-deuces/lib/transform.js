'use strict';

module.exports = (function() {
  const invert = function(bitmapObj, callback) {
    let transformedBitmap;
    return callback(transformedBitmap);
  };

  return {
    invert: invert
  };

})();
