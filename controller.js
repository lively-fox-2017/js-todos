const Model = require ('./model');
const View = require ('./view');
const fs = require('fs')

class Controller {

}

function menu(command) {
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
      Model.delete(command,function(err,data){
        Model.delete(data)
      })
    break
    case 'completed':
      Model.completed(command,function(err,data){
        View.completed(data)
      })
    break
    case 'uncompleted':
      Model.uncompleted(command,function(err,data){
        View.uncompleted(data)
      })
    break
    default:break;
  }
}

let start = process.argv;
let command = start.splice(2,start.length);
// Dijoin agar menu dapat dibaca
menu(command)
