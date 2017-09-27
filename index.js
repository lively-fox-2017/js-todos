const	Controller = require('./controller')

let command = process.argv

let keyword = command.slice(2)
//console.log(keyword[1])

Controller.menu(keyword)

