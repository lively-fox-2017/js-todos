const Controller = require('./Controller');
let control = new Controller();
switch (process.argv[2]) {
  case 'help':
    control.help();
    break;
  case 'list':
    control.list();
    break;
  case 'add':
    control.add(process.argv[3]);
    break;
  case 'task':
    control.find(process.argv[3]);
    break;
  case 'delete':
    control.delete(process.argv[3]);
    break;
  case 'complete':
    control.complete(process.argv[3]);
    break;
  case 'uncomplete':
    control.uncomplete(process.argv[3]);
    break;
}
