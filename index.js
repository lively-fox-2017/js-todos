const Controller = require('./controller')

let command = process.argv.slice(2)
let controller = new Controller()

controller.main(command)
