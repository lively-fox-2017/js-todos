class Model {

  static list(cb) {
    var fs = require('fs')
    fs.readFile('data.json', 'utf8', function(err, data) {
      if (!err) {
        var temp = JSON.parse(data)
        cb(temp)
      } else {
        console.log('Data Gagal Dibaca');
      }
    })
  }

  static add(task) {
    var fs = require('fs');
    this.list(data => {
      let newData = data;
      let objTask = {
        "id": data[data.length-1].id + 1,
        "task": task
      }
      newData.push(objTask);
      fs.writeFile("data.json", JSON.stringify(newData), 'utf8', function(err) {
        if (err) {
          return console.log(err);
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
          return console.log(err);
        }
        console.log("The file completed deleted");
      });
    })
  }

  
}


module.exports = Model
