'use strict';

module.exports = (function() {
  const invert = function(bitmapObj, callback) {
    return callback(bitmapObj);
  };

  return {
    invert: invert
  };

})();
