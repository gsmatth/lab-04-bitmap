'use strict';

const expect = require('chai').expect;
const parse = require('../lib/parse');
const readWriteBitMap = require('../lib/readwrite.js');

describe('testing parse.js', () => {
  describe('testing function Bitmap', () => {
    it('should parse to object', (done) => {
      readWriteBitMap.readFile(__dirname + '/../img/bitmap1.bmp', function(parsedObject) {
        expect(parsedObject.headerField).to.equal('BM');
        expect(typeof parsedObject).to.equal('object');
        done();
      });
    });
  });
});
