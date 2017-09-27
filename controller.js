let Model = require('./model');
let View = require('./view');
class Controller {
  static ambilData(){
    View.bantuan();
  }
  static getList(){
    let data = Model.dataList();
    View.tampilkanList(data);
  }

  static addTodo(task) {
    Model.addTask(task);
  }
  static findTodo(find){
    let hasilCari = Model.findTask(find);
    View.hasilPencarian(hasilCari)
  }
  static hapusTodo(hapus){
    Model.hapusTask(hapus);
  }
  static doneTodo(done){
    Model.doneTask(done);
  }
  static undoneTodo(undone){
    Model.undoneTask(undone);
  }
}

module.exports = Controller;
