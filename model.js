var fs = require('fs')

class Model {

  static list(cb) {
    fs.readFile('data.json', function(err,data) {
      if (err) throw err
        let temp = JSON.parse(data)
        cb(temp)
    })
  }

  static add(task) {
    var fs = require('fs');
    this.list(data => {
      let newData = data;
      let objTask = {
        "id": data.length+1,
        "task": task,
        "createAt": new Date()
      }
      newData.push(objTask);
      fs.writeFile("data.json", JSON.stringify(newData), 'utf8', function(err) {
        if (err) {
        console.log(err);
        }
        console.log("The file was saved!");
      });
    })
  }

  static find(input,cb){
    Model.list(data => {
      let dataDicari = data[input-1]
      cb([input,dataDicari.task])
    })
  }

  static delete(input){
    var fs = require('fs')
    this.list(data =>{
      for (var i = 0; i < data.length; i++) {
        if(data[i].id===parseInt(input[1])){
          data.splice(i,1)
          break;
        }
      }
      console.log(data);
      fs.writeFile("data.json", JSON.stringify(data), 'utf8', function(err) {
        if (err) {
          // return console.log(err);
        }
        console.log("The file completed deleted");
      });
    })
  }

  static completed(input){
    var fs = require('fs')
    this.list(data =>{
      for (var i = 0; i < data.length; i++) {
        if(data[i].id===parseInt(input[1])){
          let ubah = data[i].status =  true
        }
      }
      fs.writeFile("data.json", JSON.stringify(data), 'utf8', function(err) {
        if (err) {
          return console.log(err);
        }
        console.log("The file completed");
      });
    })
  }

  static uncompleted(input){
    var fs = require('fs')
    this.list(data =>{
      for (var i = 0; i < data.length; i++) {
        if(data[i].id===parseInt(input[1])){
          let ubah = data[i].status =  false
        }
      }
      fs.writeFile("data.json", JSON.stringify(data), 'utf8', function(err) {
        if (err) {
          return console.log(err);
        }
        console.log("The file uncompleted");
      });
    })
  }

  static listAsc(input){
    var fs = require('fs')
    this.list(data =>{
      // console.log(data);
      data.sort(function compare(a, b) {
        var dateA = new Date(a.date);
        var dateB = new Date(b.date);
        return dateA - dateB;
        });
        fs.writeFile("data.json", JSON.stringify(data), 'utf8', function(err) {
        if (err) {
          return console.log(err);
        }
        console.log("The file Sorted ASC");
      });
    })
  }

  static listDesc(input){
    var fs = require('fs')
    this.list(data =>{
      // console.log(data);
      data.sort(function compare(b, a) {
        var dateB = new Date(b.date);
        var dateA = new Date(a.date);
        return dateB - dateA;
        });
        fs.writeFile("data.json", JSON.stringify(data), 'utf8', function(err) {
        if (err) {
          return console.log(err);
        }
        console.log("The file Sorted DESC");
      });
    })
  }

}


module.exports = Model
