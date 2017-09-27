const fs = require('fs');
class Model {
  constructor(file) {
    this._file = file;
    this._data = JSON.parse(fs.readFileSync(file, 'utf8'));
  }

  get file() {
    return this._file;
  }

  get data() {
    return this._data;
  }

  write() {
    fs.writeFileSync(this.file, JSON.stringify(this.data, null, 4));
  }

  add(newData) {
    let dataObj = {
      'task': newData,
      'done': false,
    };
    this.data.push(dataObj);
    this.write();
  }

  delete(taskId) {
    let task = this.data.splice(taskId - 1, 1);
    this.write();
    return task[0];
  }

  findTask(taskId) {
    return (taskId <= this.data.length && taskId > 0) ? this.data[taskId - 1] : null;
  }

  checkComplete(taskId) {
    if (taskId <= this.data.length && taskId > 0) {
      this.data[taskId - 1]['done'] = true;
      this.write();
      return this.data[taskId - 1];
    } else {
      return false;
    }
  }

  checkUncomplete(taskId) {
    if (taskId <= this.data.length && taskId > 0) {
      this.data[taskId - 1]['done'] = false;
      this.write();
      return this.data[taskId - 1];
    } else {
      return false;
    }
  }
}

module.exports = Model;
