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

//get new color table
Bitmap.prototype.newColorTable = function(colorTable, callback){
  callback(colorTable);
};

firstBitmap.newColorTable(this.colorTable, transform);


//call write () on new object
