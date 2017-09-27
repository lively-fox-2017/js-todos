let Model = require('./model.js')
class View {
  static help(){
    console.log(Model.help());
  }

  static list(){
    console.log(Model.list());
  }

  static add(task){
    console.log(Model.add(task));
  }

  static search(id){
    console.log(Model.search(id));
  }

  static delete(id){
    console.log(Model.delete(id));
  }

  static complete(id){
    console.log(Model.complete(id));
  }

  static uncomplete(id){
    console.log(Model.uncomplete(id));
  }
}

// View.help();

module.exports = View;
