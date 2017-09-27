const	Controller = require('./controller')

let command = process.argv

let keyword=command[2]


Controller.menu(keyword)

