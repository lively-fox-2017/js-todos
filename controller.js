const Model = require('./model.js')
const View = require('./view.js')


class Controller {
  static receiveCommand(command, task_list){
    if(command == 'list') {
      var todoList = Model.showTodoList()  //ini koneksi ke model. dan kita dapatkan return data nya
      // console.log("============",todoList)
      View.tampilkanTodo(todoList)  //data dikirimkan ke view untuk ditampilkan
    }
    if(command == 'add'){
      //console.log( task_list)
      var addList = Model.addTodoList(task_list)
      View.tampilkanTodoBaru(addList)
    }
    if(command == 'task'){
      var findList = Model.findId(task_list)
      View.find(findList)
    }
    if(command == 'delete'){
      var delListed = Model.delList(task_list)
      View.deletedId(delListed)
    }
    if(command == 'complete'){
      var comListed = Model.comList(task_list)
      View.tampilkanTodo(comListed)
    }
    if(command == 'uncomplete'){
      var uncomListed = Model.uncomList(task_list)
      View.tampilkanTodo(uncomListed)
    }
    
  }
 
}

module.exports = Controller