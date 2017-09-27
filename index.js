const Controller = require('./controller.js')

class Todo {
  static manageCommand(command, text_list) {
    if(command == 'help' || command == null) {
      var arrMain = ['node todo.js', 'node todo.js help', 'node todo.js list', 'node todo.js task <task_id>', 'node todo.js add <task_content>', 'node delete <task_id>', 'complete <task_id>', 'node todo.js uncomplete <task_id>']
      for (var i = 0; i < arrMain.length; i++){
        console.log(arrMain[i])
      }
    } else {
      Controller.receiveCommand(command, text_list)
    }
   
  }
}


var argv = process.argv 
var command = argv[2]
var text_list = argv[3]
 //console.log(text_list)
// console.log(argv)
 
Todo.manageCommand(command, text_list)

