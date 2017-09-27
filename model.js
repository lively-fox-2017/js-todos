const fs = require('fs');
class Model {
  static readFile(){
    this._data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
    return this._data
  }

  static saveFile(data) {
    fs.writeFile('data.json', JSON.stringify(data), function(err) {
      if (err) throw err;
    });
  }

  static help(){
    this._help = `node todo.js \nnode todo.js help \nnode todo.js list \nnode todo.js add <task_content> \nnode todo.js task <task_id> \nnode todo.js delete <task_id> \nnode todo.js complete <task_id> \nnode todo.js uncomplete <task_id>`
    return this._help
  }

  static list() {
    this.readFile()
    let todoList = []
    for (var i = 0; i < this._data.length; i++) {
      if(this._data[i].marked == false){
        todoList.push(`${i+1}. [] : ${this._data[i].task}`);
      } else {
        todoList.push(`${i+1}. [x] : ${this._data[i].task}`);
      }
    }
    return todoList.join('\n')
  }

  static add(task) {
    this.readFile()
    let newData = {task : task, marked:false};
    this._data.push(newData);

    this.saveFile(this._data);
    return `Data berhasil ditambah`
  }

  static search(id) {
    this.readFile()
    let todoList;
    let length = this._data.length
    for (var i = 0; i < this._data.length; i++) {
      if (id == length) {
        if(this._data[length-1].marked == false){
          todoList = `${id}. [] : ${this._data[length-1].task}`;
        } else {
          todoList = `${id}. [x] : ${this._data[length-1].task}`;
        }
      }

      if (id == i) {
        if(this._data[i-1].marked == false){
          todoList = `${id}. [] : ${this._data[i-1].task}`;
        } else {
          todoList = `${id}. [x] : ${this._data[i-1].task}`;
        }
      }
    }
    return todoList
  }

  static delete(id) {
    this.readFile()
    let dataDelete = '';
    let length = this._data.length
    for (var i = 0; i < this._data.length; i++) {
      if (id == length) {
        dataDelete = this._data[length-1]
        this._data.splice(length-1, 1);
      }
      if (id == i) {
        dataDelete = this._data[i-1].task;
        this._data.splice(i-1, 1);
      }
    }
    this.saveFile(this._data);
    return `Data berhasil dihapus`
  }

  static complete(id){
    this.readFile()
    let length = this._data.length
    for (var i = 0; i < this._data.length; i++) {
      if (id == length) {
        this._data[length-1].marked = true;
      }
      if (id == i) {
        this._data[i-1].marked = true;
      }
    }
    this.saveFile(this._data);
    return 'Data berhasil di checkmark'
  }

  static uncomplete(id){
    this.readFile()
    let length = this._data.length
    for (var i = 0; i < this._data.length; i++) {
      if (id == length) {
        this._data[length-1].marked = false;
      }
      if (id == i) {
        this._data[i-1].marked = false;
      }
    }
    this.saveFile(this._data);
    return 'Data berhasil uncheck'
  }
}
// console.log(Model.readFile());
module.exports = Model;
