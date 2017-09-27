'use strict'
const controller = require('./controller.js');
let cliArguments = process.argv.slice();
cliArguments.shift();
cliArguments.shift();

controller.handler(cliArguments);
