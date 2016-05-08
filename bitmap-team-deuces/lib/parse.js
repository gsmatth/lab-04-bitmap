'use strict';
const transform = require(__dirname  +'/transform').invertColorTable;

function Bitmap(){
  this.headerField = '';
  this.fileSize = '';
  this.imgStartOffset = '';
  this.colorTable = '';
  this.pixelArray = [];
}

var firstBitmap = new Bitmap();

exports.parse = function(buffer){
  console.log('stepped in to parse()');
  firstBitmap.headerField = buffer.slice(0, 2).toString();//BM
  firstBitmap.fileSize = buffer.readIntLE(2, 6);//bytes
  firstBitmap.imgStartOffset =  buffer.slice(10, 14).readUIntLE(0, 4);
  firstBitmap.colorTable =  buffer.slice(54, 1071).toString('hex');//buffer
  firstBitmap.pixelArray =  buffer.slice(1071, 11078).toString('hex');//array

  console.log('headerField is: ' + firstBitmap.headerField);
  console.log('file size is: ' + firstBitmap.fileSize);
  console.log('color table is ' + firstBitmap.colorTable);
  console.log('pixel array is ' + firstBitmap.pixelArray);
};

//build prototype and get new colortable
Bitmap.prototype.newColorTable = function(colorTable, callback){
  callback(colorTable);
};

// Bitmap.prototype.newObject = function(){console.log('create new object function');

Bitmap.prototype.newColorTable(firstBitmap.colorTable, transform);

  //   const invert = function(colorTable, callback) {
  //     console.log('value of callback in newColorTable ' + callback);
  //     let prevIndex = 0;
  //     const increment = 4;
  //
  //     if (!Buffer.isBuffer(colorTable)) {
  //       return transform(new Error('no buffer provided'));
  //     }
  //
  //     for (let i = increment; i < colorTable.length + 1; i += increment){
  //       const b = colorTable.slice(prevIndex, i);
  //       for (let color of b.entries()) {
  //         color[1] = 255 - color[1];
  //         b[color[0]] = color[1];
  //       }
  //       prevIndex = i;
  //     }
  //     callback(null, colorTable);
  //   };
  // };
  //
  //   return {
  //     invert: invert
  //
  //   };
  //
  // };
//build () to build new object with new colortable
// Bitmap.prototype.newObject = function(){
//
// };
//call write () on new object
