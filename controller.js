const Model = require('./model.js');
const View = require('./view.js');

class Controller {
  constructor(userInput) {
    this.userInput = userInput;
    this.mainProcess(this.userInput);
  }
  getFile() {
    var modelObj = new Model();
    return modelObj.data;
  }
  list() {
    var data = this.getFile();
    return data;
  }
  listCreated(sort) {
    var modelObj = new Model();
    var data = modelObj.sortedListCreated(sort);
    return data
  }
  listCompleted(sort) {
    var modelObj = new Model();
    var data = modelObj.sortedListCompleted(sort);
    return data
  }
  findByTag(tag) {
    var modelObj = new Model();
    var data = modelObj.findByTag(tag);
    return data;
  }
  find(id) {
    var modelObj = new Model();
    var data = modelObj.findData(id)
    return data;
  }
  mainProcess(data) {
    var result = "";
    var objView = new View();
    var objModel = new Model();
    if (data[0].indexOf('filter') > -1) {
      data = data[0].split(':');
    }
    switch (data[0]) {
      case 'help':
        result = objView.showHelp();
        break;
      case 'tag':
        var resultProcess = objModel.addTag(data[1]);
        result = objView.showNotification('Tagged task', resultProcess.task + "with tags " + resultProcess.tag + " to");
        result += objView.showList(this.list());
        break;
      case 'list':
        var data = this.list();
        result = objView.showList(data);
        break;
      case 'list:created':
        var data = this.listCreated(data[1]);
        result = objView.showList(data);
        break;
      case 'list:completed':
        var data = this.listCompleted(data[1]);
        result = objView.showList(data);
        break;
      case 'add':
        var resultProcess = objModel.addData(data[1]);
        result = objView.showNotification('add', data[1] + " to");
        result += objView.showList(this.list());
        break;
      case 'find':
        var data = this.find(data[1]);
        if (data.length > 0) {
          result = objView.showList(data);
        } else {
          result = objView.showNotFound();
        }
        break;
      case 'delete':
        var resultProcess = objModel.deleteData(data[1]);
        if (resultProcess === "") {
          result = objView.showNotFound();
        } else {
          result = objView.showNotification('delete', resultProcess + " from");
          result += objView.showList(this.list());
        }
        break;
      case 'complete':
        var resultProcess = objModel.completeTask(data[1]);
        if (resultProcess === "") {
          result = objView.showNotFound();
        }
        result += objView.showList(this.list());
        break;
      case 'uncomplete':
        var resultProcess = objModel.uncompleteTask(data[1]);
        if (resultProcess === "") {
          result = objView.showNotFound();
        }
        result += objView.showList(this.list());
        break;
      case 'filter':
        var data = this.findByTag(data[1]);
        if (data.length > 0) {
          result = objView.showList(data);
        } else {
          result = objView.showNotFound();
        }
        break;
      default:
        result = objView.showInvalidCommand();
        break;
    }
    console.log(result);
  }
}

module.exports = Controller;
