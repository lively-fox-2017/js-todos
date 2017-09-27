"use strict"

var controller = require('./controller')

let arr = process.argv.splice(0,2);
let input = process.argv.splice(0,1).join('');
let argData = process.argv.join(' ');
// console.log(input);

// console.log(controller.viewHelp());
// arr[2] = controller.viewHelp();

if(input === 'help' || input === '') {
  controller.viewHelp()
  // console.log('tests');
} else if (input === 'list') {
  controller.listData()
} else if (input === 'add') {
  controller.addData(argData)
}


module.exports = input
