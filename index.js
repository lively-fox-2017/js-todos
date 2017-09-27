const Controller = require('./Controller');
let control = new Controller();
if (process.argv[2] === 'help' || !process.argv[2])
  control.help();
else if (process.argv[2].indexOf('list') !== -1) {
  if (process.argv[2].substring(4) === '')
    control.list();
  else {
    if (process.argv[2].split(':')[1] === 'created' || process.argv[2].split(':')[1] === 'completed' || process.argv[2].split(':')[1] === 'outstanding')
      control.sortList(process.argv[2].split(':')[1], process.argv[3]);
    else
      control.help();
  }
} else if (process.argv[2] === 'add')
  control.add(process.argv[3]);
else if (process.argv[2] === 'task')
  control.find(process.argv[3]);
else if (process.argv[2] === 'delete')
  control.delete(process.argv[3]);
else if (process.argv[2] === 'complete')
  control.complete(process.argv[3]);
else if (process.argv[2] === 'uncomplete')
  control.uncomplete(process.argv[3]);
else if (process.argv[2] === 'tag')
  control.addTag(process.argv[3], process.argv.slice(4));
else if (process.argv[2].indexOf('filter') !== -1) {
  control.filterByTag(process.argv[2].split(':')[1]);
} else {
  control.help();
}