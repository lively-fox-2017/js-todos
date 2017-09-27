const View = require('./view');
const Model = require('./model');

class Controller {
  constructor() {
    this.model = new Model('data.json');
  }

  help() {
    View.help();
  }

  list() {
    View.list(this.model.data);
  }

  add(newData) {
    this.model.add(newData);
    View.addedRespon(newData);
  }

  delete(taskId) {
    let task = this.model.delete(taskId);
    View.deletedRespon(taskId, task);
  }

  find(taskId) {
    let task = this.model.findTask(taskId);
    View.findRespon(taskId, task);
  }

  complete(taskId) {
    let task = this.model.checkComplete(taskId);
    View.completeRespon(taskId, task);
  }

  uncomplete(taskId) {
    let task = this.model.checkUncomplete(taskId);
    View.uncompleteRespon(taskId, task);
  }

  sortList(attr, order) {
    let data = this.model.getSortedList(attr, order);
    View.list(data);
  }

  addTag(taskId, tag) {
    let data = this.model.addTag(taskId, tag);
    View.tagRespon(taskId, data, tag);
  }

  filterByTag(tag) {
    let data = this.model.filterByTag(tag);
    View.list(data);
  }
}

module.exports = Controller;
