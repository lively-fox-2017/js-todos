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

  static add(input) {
    var fs = require('fs');
    // var content = JSON.stringify(output);
    // console.log(input);
    this.list(data => {
      // console.log(data);
      let newData=data;
      // console.log(newData);
      newData.push(input);
      console.log(newData);
      fs.writeFile("data.json", JSON.stringify(newData), 'utf8', function(err) {
        if (err) {
          return console.log(err);
        }
        console.log("The file was saved!");
      });
    })
  }


}

module.exports = Model
