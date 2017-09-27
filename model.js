const fs = require('fs');

class Model {
  constructor() {

  }
  readFile(path) {
    var data = JSON.parse(fs.readFileSync(path,'utf8'));
    return data;
  }
}

module.exports = Model;
