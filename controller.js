const Model = require ('./model');
const View = require ('./view');
const fs = require('fs')

class Controller {
  constructor(){

  }

  static menu(command) {
    switch(command[0]) {
      case 'help':
        View.help()
      break
      case 'list':
        Model.list(data => {
          View.tampilData(data)
        })
      break
      case 'add':
        Model.add(command[1])
      break
      case 'find':
        Model.find(command[1],data => {
          View.cariData(data)
      })
      break
      case 'delete':
        Model.delete(command,data => {
          Model.delete(data)
        })
      break
      case 'completed':
        Model.completed(command,data => {
          View.completed(data)
        })
      break
      case 'uncompleted':
        Model.uncompleted(command,data => {
          View.uncompleted(data)
        })
      break
      case 'list:outstanding:asc':
        Model.listAsc(command,data => {
          View.list(data)
        })
      break
      case 'list:outstanding:desc':
        Model.listDesc(command,data => {
          View.list(data)
        })
      break
      default:break;
    }
  }
}



let start = process.argv;
let command = start.splice(2,start.length);
// Dijoin agar menu dapat dibaca
Controller.menu(command);


module.exports = Controller
