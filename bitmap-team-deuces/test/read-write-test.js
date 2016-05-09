'use strict';
const fs = require('fs');
const expect = require('chai').expect;
const readwrite = require('../lib/readwrite');

describe('Testing readwrite page', function(){
  describe('Testing readFile function', function(){
    it('should return a buffer', function(done) {
      const dummyParse = function(buffer) {
        expect(Buffer.isBuffer(buffer)).to.eql(true);
        done();
      };
      readwrite.readFile(dummyParse());
    });
  });

  describe('Testing writeFile function', function(){
    it('should write a new file called transformed.txt', function(done){
      var testBuffer = new Buffer([1, 2, 3, 4, 5]);
      var path2 = __dirname + '/../img/transformed.txt';
      readwrite.writeFile(path2,testBuffer,function(){
        fs.readFile(path2, function(err, data){
          expect(data).to.eql(testBuffer);
          done();
        });
      });
    });
  });
});
