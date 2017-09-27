const fs = require('fs');
class Model {
  constructor(file) {
    this._file = file;
    this._data = JSON.parse(fs.readFileSync(file, 'utf8'));
    for (var i = 0; i < this._data.length; i++) {
      if (this._data[i]['created_date'])
        this._data[i]['created_date'] = new Date(this._data[i]['created_date']);
      if (this._data[i]['finish_date'])
        this._data[i]['finish_date'] = new Date(this._data[i]['finish_date']);
    }
  }

  get file() {
    return this._file;
  }

  get data() {
    return this._data;
  }

  set data(data) {
    this._data = data;
  }

  getSortedList(attr, order) {
    if (attr === 'created') {
      if (order === 'asc') {
        return this.data.sort((a, b) =>
          a['created_date'] - b['created_date']);
      } else if (order === 'desc') {
        return this.data.sort((a, b) =>
          b['created_date'] - a['created_date']);
      }
    } else if (attr === 'completed') {
      if (order === 'asc') {
        return this.data.filter((element) => element['done']).sort((a, b) =>
          a['finish_date'] - b['finish_date']);
      } else if (order === 'desc') {
        return this.data.filter((element) => element['done']).sort((a, b) =>
          b['finish_date'] - a['finish_date']);
      }
    } else if (attr === 'outstanding') {
      if (order === 'asc') {
        return this.data.filter((element) => !element['done']).sort((a, b) =>
          a['finish_date'] - b['finish_date']);
      } else if (order === 'desc') {
        return this.data.filter((element) => !element['done']).sort((a, b) =>
          b['finish_date'] - a['finish_date']);
      }
    }
    return null;
  }

  write() {
    fs.writeFileSync(this.file, JSON.stringify(this.data, null, 4));
  }

  add(newData) {
    let dataObj = {};
    if (this.data.length > 0) {
      dataObj = {
        'id': this.data[this.data.length - 1]['id'] + 1,
        'task': newData,
        'done': false,
        'created_date': new Date(),
        'finish_date': null,
        'tag': []
      };
    } else {
      dataObj = {
        'id': 1,
        'task': newData,
        'done': false,
        'created_date': new Date(),
        'finish_date': null,
        'tag': []
      };
    }
    this.data.push(dataObj);
    this.write();
  }

  delete(taskId) {
    let task = this.data.filter((curr) => curr['id'] == taskId)[0];
    if (task) {
      this.data = this.data.filter((curr) => curr['id'] != taskId);
      this.write();
    }
    return task;
  }

  findTask(taskId) {
    if (taskId <= this.data.length && taskId > 0) {
      return this.data.filter((curr) => curr['id'] == taskId)[0];
    } else {
      return null;
    }
  }

  checkComplete(taskId) {
    if (taskId <= this.data.length && taskId > 0) {
      let isDone = false;
      this.data = this.data.map((element) => {
        if (element['id'] == taskId) {
          if (element['done'] == true) {
            isDone = true;
          } else {
            element['done'] = true;
            element['finish_date'] = new Date();
          }
        }
        return element;
      });
      if (!isDone)
        this.write();
      return (!isDone) ? this.data.filter((curr) => curr['id'] == taskId)[0] : 'done';
    } else {
      return false;
    }
  }

  checkUncomplete(taskId) {
    let isDone = true;
    if (taskId <= this.data.length && taskId > 0) {
      this.data = this.data.map((element) => {
        if (element['id'] == taskId) {
          if (element['done'] == false) {
            isDone = false;
          } else {
            element['done'] = false;
            element['finish_date'] = null;
          }
        }
        return element;
      });
      if (isDone)
        this.write();
      return (isDone) ? this.data.filter((curr) => curr['id'] == taskId)[0] : 'undone';
    } else {
      return false;
    }
  }

  addTag(taskId, tag) {
    if (taskId <= this.data.length && taskId > 0) {
      this.data = this.data.map((element) => {
        if (element['id'] == taskId) {
          element['tag'] = tag;
        }
        return element;
      });
      this.write();
      return this.data.filter((curr) => curr['id'] == taskId)[0];
    } else {
      return false;
    }
  }

  filterByTag(tag) {
    return this.data.filter((element) => {
      if (element['tag'].indexOf(tag) !== -1)
        return true;
    });
  }
}

module.exports = Model;
