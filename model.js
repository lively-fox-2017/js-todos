const fs = require('fs');

class Model {
  constructor() {
    this.path = 'data.json';
    this.data = this.readFile();
  }
  readFile() {
    var data = JSON.parse(fs.readFileSync(this.path, 'utf8'));
    this.data = data;
    return data;
  }
  addData(addedTask) {
    var newData = this.data;
    let lastId = "" +parseInt(newData[newData.length - 1].id) + 1;
    var today = new Date();
    var jsonObj = {
      id: lastId,
      task: addedTask,
      createdAt: today,
      completeAt: "",
    }
    newData.push(jsonObj);
    newData = JSON.stringify(newData);
    this.save(newData);
  }
  findData(id) {
    var data = [];
    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i].id === id.trim()) {
        data.push(this.data[i]);
        break;
      }
    }
    return data;
  }
  deleteData(id) {
    var data = "";
    for(var i =0;i<this.data.length;i++){
      if(this.data[i].id === id.trim()){
        data = this.data[i].task;
        this.data.splice(i,1);
        break;
      }
    }
    this.save(JSON.stringify(this.data));
    return data;
  }
  completeTask(id) {
    var data = "";
    for(var i =0;i<this.data.length;i++){
      if(this.data[i].id === id.trim()){
        var today = new Date();
        this.data[i].completeAt = today;
        data = "ululu";
        break;
      }
    }
    this.save(JSON.stringify(this.data));
    return data;
  }
  uncompleteTask(id) {
    var data = "";
    for(var i =0;i<this.data.length;i++){
      if(this.data[i].id === id.trim()){
        this.data[i].completeAt = "";
        data = "ululu";
        break;
      }
    }
    this.save(JSON.stringify(this.data));
    return data;
  }
  save(data) {
    fs.writeFileSync(this.path, data);
  }
}

module.exports = Model;
