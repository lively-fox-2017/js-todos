const	Controller = require('./controller')

let command = process.argv

let keyword = command.slice(2)



Controller.menu(keyword)

