const Model = require('./model.js')
const View = require('./view.js')

class Controller {
  constructor(userInput) {
    this.userInput = userInput;
    this.mainProcess(this.userInput);
  }
  getFile(path) {
    var modelObj = new Model();
    modelObj.readFile(path);
  }
  mainProcess(data) {
    var result = "";
    var obj = new View();
    switch (data[2]) {
      case 'help':
        result = obj.showHelp();
        break;
      default:
        result = obj.showInvalidCommand();
        break;
    }
    console.log(result);
  }
}

module.exports = Controller;
