let Controller = require('./controller.js')

let command = process.argv.slice(2)
let controller = new Controller()
controller.menu(command)
