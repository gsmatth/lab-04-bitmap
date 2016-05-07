'use strict';

var fs = require('fs');
var readFile = require('readwrite').readFile;
var writeFile = require('readwrite').writeFile;
var parse = require('parse');
const transform = require('./lib/transform');

function transformBitmap(path1, path2){
  var buffer = readwrite.readFile(path1);//output is data buffer
  var obj = parse.something(buffer);//output is obj
  var newBuffer = transform.invert(Obj.colortable);/*output is modified colorTable*/
  readwrite.writeFile(path2, newbuffer=obj.toBuffer));//output is a new, transformed bitmap file
}

transformBitmap('bitmap.bmp', 'bitmapInverted.bmp');
