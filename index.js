'use strict'

let Controller = require('./controller')

let controller = new Controller

let command = process.argv.slice(2)

controller.menu(command)
