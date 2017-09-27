let Model = require('./model');
let View = require('./view');
class Controller {
  constructor(){

  }
  static showHelp(){
    View.showHelp();
  }
  static showError(){
    View.showError();
  }
  static showList(){
    let list = Model.getJson();
    View.showList(list);
  }
  static addTask(argv){
    Model.getJson();
    let added = Model.addTask(argv);
    View.showAddList(added);
  }
  static findTaskId(argv){
    Model.getJson();
    let find = Model.findTaskId(argv);
    View.showFindTask(find)
  }
  static deleteTaskId(argv){
    Model.getJson();
    let del = Model.deleteTaskId(argv);
    View.showDeleteTask(del);
  }
}

module.exports = Controller
