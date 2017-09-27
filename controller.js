let Model = require('./model.js')
let View = require('./view.js')

class Controller {
  menu(command) {
    switch(command[0]){
      case 'help' :
        View.help();
        break;
      case 'list' :
        View.list();
        break;
      case 'add' :
        if(command[1]){
          let newNote = command.slice(1).join(' ')
          View.add(newNote);
        }
        break;
      case 'task' :
        View.find(command[1]);
        break;
      case 'delete' :
        View.delete(command[1]);
        break;
      case 'complete' :
        Model.compData(command[1]);
        break;
      case 'uncomplete' :
        Model.uncompData(command[1]);
        break;
      case 'list:created' :
        if(command[1]){

        }else{
          
        }
        break;
    }
  }
}

module.exports = Controller;
