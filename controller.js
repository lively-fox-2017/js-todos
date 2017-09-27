const Model = require('./model.js');
const View = require('./view.js');


class Controller {
  static menu(command){
    if (command[0] === undefined || command[0] === 'help') {
      View.help();
    } else if (command[0] === 'list') {
      View.list();
    } else if (command[0] === 'add') {
      command.shift()
      View.add(command);
    } else if (command[0] === 'task') {
      command.shift();
      View.search(command);
    } else if (command[0] === 'delete') {
      command.shift();
      View.delete(command);
    } else if (command[0] === 'complete') {
      command.shift();
      View.complete(command);
    } else if (command[0] === 'uncomplete') {
      command.shift();
      View.uncomplete(command);
    }
  }

}

module.exports = Controller;
