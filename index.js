var controller = require('./controller.js')
let arr = process.argv
let values = arr.slice(2)
let app = controller.actions(values)
