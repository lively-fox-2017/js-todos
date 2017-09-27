const Controller = require('./controller.js');
const TodoController = new Controller;

let argv = process.argv.slice(2);

TodoController.command(argv);
