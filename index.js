let Controller = require('./controller.js')
let command = process.argv.slice(2)
// console.log(input);

Controller.menu(command)
module.exports = command;
