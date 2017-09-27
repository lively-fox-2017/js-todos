
class View {
  static bantuan(){
    console.log(
      'node index.js help\nnode index.js list\nnode index.js add <task_content>\nnode index.js task <task_id>\nnode index.js delete <task_id>\nnode index.js complete <task_id>\nnode index.js uncomplete <task_id>');
  }
  static tampilkanList(dataAll){
    console.log(dataAll);
  }
  static hasilPencarian(find){
    console.log(find);
  }
}
module.exports = View;