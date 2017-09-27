let Model = require("./model");
let View = require("./view");

class Controller {
  constructor(){

  }

  static showHelp() {
    View.showHelp();
  }

  static showErr() {
    View.showErr();
  }

  static showList() {
    let list = Model.list();
    View.showList(list);
  }

}

module.exports = Controller;
