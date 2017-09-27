var Controller = require('./controller.js')

var input = process.argv;
var arr = [input[2]];
var newInput = "";
for(var i =3;i<input.length;i++){
  newInput += input[i] + " ";
}
arr.push(newInput);
var main = new Controller(arr);
