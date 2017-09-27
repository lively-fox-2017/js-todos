class View {
  constructor(){

  }
  static showHelp(){
    console.log('node index.js\nnode index.js help\nnode index.js list\nnode index.js add <task_content>\nnode index.js task <task_id>\nnode index.js delete <task_id>\nnode index.js complete <task_id>\nnode index.js uncomplete <task_id>')
  }
  static showError(){
    console.log('input: "node index.js help"')
  }
  static showList(list){
    console.log(list)
  }
  static showAddList(newTask){
    console.log(newTask);
  }
  static showFindTask(findTask){
    console.log(findTask)
  }
  static showDeleteTask(deleteTask){
    console.log(deleteTask)
  }
}

module.exports = View;