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
  sortedListCreated(sort) {
    var data = this.data;
    for (var i = 0; i < data.length; i++) {
      for (var j = i; j < data.length; j++) {
        if (Date.parse(data[i].createdAt) < Date.parse(data[j].createdAt)) {
          var temp = data[i];
          data[i] = data[j];
          data[j] = temp;
        }
      }
    }
    if (sort.trim() === 'asc') {
      data = data.reverse();
    }
    return data;
  }
  sortedListCompleted(sort) {
    var data = this.data;
    var tempArr = [];
    for (var i = 0; i < data.length; i++) {
      if (data[i].completeAt !== "") {
        tempArr.push(data[i]);
      }
    }
    for (var i = 0; i < tempArr.length; i++) {
      for (var j = i; j < tempArr.length; j++) {
        if (Date.parse(tempArr[i].createdAt) < Date.parse(tempArr[j].createdAt)) {
          var temp = tempArr[i];
          tempArr[i] = tempArr[j];
          tempArr[j] = temp;
        }
      }
    }
    if (sort.trim() === 'asc') {
      tempArr = tempArr.reverse();
    }
    return tempArr;
  }
  addData(addedTask) {
    var newData = this.data;
    let lastId = parseInt(newData[newData.length - 1].id) + 1;
    var today = new Date();
    var jsonObj = {
      id: lastId.toString(),
      task: addedTask,
      createdAt: today,
      completeAt: "",
      tag: []
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
    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i].id === id.trim()) {
        data = this.data[i].task;
        this.data.splice(i, 1);
        break;
      }
    }
    this.save(JSON.stringify(this.data));
    return data;
  }
  completeTask(id) {
    var data = "";
    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i].id === id.trim()) {
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
    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i].id === id.trim()) {
        this.data[i].completeAt = "";
        data = "ululu";
        break;
      }
    }
    this.save(JSON.stringify(this.data));
    return data;
  }
  addTag(data) {
    var hasil = data.split(' ');
    var obj = this.findData(hasil[0]);
    for (var i = 1; i < hasil.length - 1; i++) {
      obj[0].tag.push(hasil[i]);
    }
    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i].id === obj[0].id) {
        this.data[i] = obj[0];
        break;
      }
    }
    this.save(JSON.stringify(this.data));
    return obj[0];
  }
  findByTag(tag) {
    var data = [];
    for (var i = 0; i < this.data.length; i++) {
      for (var j = 0; j < this.data[i].tag.length; j++) {
        if (tag.trim() === this.data[i].tag[j]) {
          data.push(this.data[i]);
          break;
        }
      }
    }
    return data;
  }
  save(data) {
    fs.writeFileSync(this.path, data);
  }
}

module.exports = Model;
