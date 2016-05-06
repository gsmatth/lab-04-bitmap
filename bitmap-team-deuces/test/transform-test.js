'use strict';

const expect = require('chai').expect;
const transform = require('../lib/transform');

describe('transform module', () => {
  describe('invert method', () => {
    it('should invert colors', (done) => {
      const colorTableBuf = new Buffer([100, 45]);
      let newColors;
      transform.invert(colorTableBuf, (newBuff) => {
        newColors = newBuff;
        console.log('old colors', colorTableBuf);
        console.log('new colors', newColors);
        expect(newColors);
        done();
      });

    });
  });
});
