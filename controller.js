var tampilView = require('./view');
var model = require('./model')
var input = require('./index')

class Controller {

  viewHelp() {
    return tampilView.helpMenu()

  }

  listData(){
    let list = model.listToDoing()
    return tampilView.listData(list)
  }

  viewMain(){
    return tampilView.viewMain()
  }

  addData(argData){
    return model.writeData(argData)
  }


}

var controller = new Controller();

// console.log(controller.listData());



module.exports = controller
