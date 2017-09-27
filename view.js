let Model = require('./model')

class View {
  static help() {
    console.log(Model.helpData());
  }

  static list() {
    let listData = Model.listData();
    for (var i = 0; i < listData.length; i++) {
      console.log(`${i+1}. ${listData[i].status} ${listData[i].note}`);
    }
  }

  static add(newNote) {
    Model.addData(newNote)
    console.log(`Added "${newNote}" to your TODO list...`);
  }

  static find(id) {
    let listData = Model.listData();
    console.log(`${id}. ${listData[id-1].status} ${listData[id-1].note}`);
  }

  static delete(id) {
    let listData = Model.listData();
    if(listData.length === 0){
      console.log(`Your TODO list is empty...`);
    }else{
      console.log(`Deleted "${listData[id-1].note}" from your TODO list...`);
      Model.delData(id)
    }
  }
}

module.exports = View;
