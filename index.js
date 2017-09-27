const Controller = require("./controller");

let argv = process.argv;
argv.splice(0,2);

let controller = new Controller(argv);
controller.list();