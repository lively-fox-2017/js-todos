const Model = require ('./model');
const View = require ('./view');
const fs = require('fs')

class Controller {

  static help() {
    console.log(`$ node todo.js`);
    console.log(`$ node todo.js help`);
    console.log(`$ node todo.js list`);
    console.log(`$ node todo.js add <task_content>`);
    console.log(`$ node todo.js task <task_id>`);
    console.log(`$ node todo.js delete <task_id>`);
    console.log(`$ node todo.js complete <task_id> `);
    console.log(`$ node todo.js uncomplete <task_id>`);
  }

}

function menu(command) {
  switch(command[0]) {
    case 'help':
      Controller.help()
    break
    case 'list':
      Model.list(data => {
        View.tampilData(data)
      })
    break
    case 'add':
    // console.log(command[1]);
      let dataObj={"task":command[1]}
      // console.log(dataObj);
      Model.add(dataObj)
      // console.log('asdsadsadsa');
    break
    default:
      return 'Masukan Opt Menu'
  }
}

let start = process.argv;
// console.log(start.length);
let command = start.splice(2,start.length);
// Dijoin agar menu dapat dibaca
menu(command)
