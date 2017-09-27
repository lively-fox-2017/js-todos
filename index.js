let argv = process.argv;
let controller = require('./controller')
if(argv[2] === 'help'){
  controller.showHelp();
}
else if(argv[2] === 'list'){
  controller.showList();
}
else if(argv[2] === 'add'){
  controller.addTask(argv[3]);
}
else if(argv[2] === 'task'){
  controller.findTaskId(argv[3]);
}
else if(argv[2] === 'delete'){
  controller.deleteTaskId(argv[3]);
}
else {
  controller.showError();
}

