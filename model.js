let fs = require('fs');

class Model {
  constructor() {

  }

  static list() {
    let menu = [];
    let content = fs.readFileSync('data.json', 'utf8');
    let objContent = JSON.parse(content);
    for (let i = 0; i < objContent.length; i++) {
      menu.push([i + 1] + '. ' + objContent[i].task);
    }

    return menu.join('\n');
  }
}

// let model = new Model();
// console.log(model.list());

module.exports = Model;
