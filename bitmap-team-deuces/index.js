'use strict';

const fs = require('fs');
const readFile = require(__dirname + '/lib/readwrite').readFile;
const writeFile = require(__dirname + '/lib/readwrite').writeFile;
const parse = require(__dirname + '/lib/parse');
const transform = require(__dirname + '/lib/transform').invertColorTable;
var path1 = __dirname + '/../img/bitmap1.bmp';
var path2 = '/img/bitmap2.bmp';

function transformBitmap(path1, path2){
  readFile(parse.parse);
  // var newObj = parse.parse(buffer);//output is obj
  // console.log('the new object is: '+  newObj);
  // var newBuffer = transform.invert(Obj.colortable);/*output is modified colorTable*/
  // readwrite.writeFile(path2, newbuffer=obj.toBuffer));//output is a new, transformed bitmap file
}

transformBitmap(path1, path2);
