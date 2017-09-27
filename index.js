const Controller = require('./Controller');
let control = new Controller();
switch (process.argv[2]) {
  case 'help':
    control.help();
    break;
}
