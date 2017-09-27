'use strict'

let key = process.argv;
let controller = require("./controller");

if (key[2] === 'help') {
  controller.showHelp();
} else if (key[2] === 'list') {
  controller.showList();
} else {
  controller.showErr();
}
