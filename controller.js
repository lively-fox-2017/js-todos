'use strict'

let View = require('./view.js')
let Model = require('./model.js')

class Controller {

  menu(command) {
    if (command[0]) {
      switch (command[0]) {
        case 'help':
          View.commandView()
          break
        case 'list':
          View.listView(Model.getData())
          break
        case 'add':
          if (command[1]) {
            let task = command.slice(1).join(' ')
            View.completedAdd(Model.addData(task))
          } else {
            View.emptyAdd()
          }
          break
        case 'task':
          if (command[1]) {
            View.showTaskID(Model.getID(command[1]))
          } else {
            View.emptyTaskId()
          }
          break
        case 'delete':
          if (command[1]) {
            View.deletedTaskID(Model.deleteID(command[1]))
          } else {
            View.emptyTaskId()
          }
          break
        case 'complete':
          if (command[1]) {
            View.updateCompleteTaskID(Model.completedID(command[1]))
          } else {
            View.emptyTaskId()
          }
          break
        case 'list:created':
          if (command[1]) {
            if (command[1] == 'asc') {
              View.listView(Model.listCreatedAsc())
            } else {
              View.listView(Model.listCreatedDesc())
            }
          } else {
            View.listView(Model.listCreatedAsc())
          }
          break
        case 'list:completed':
          if (command[1]) {
            if (command[1] == 'asc') {
              View.listView(Model.listCompletedAsc())
            } else {
              View.listView(Model.listCompletedDesc())
            }
          } else {
            View.listView(Model.listCompletedDesc())
          }
          break
        case 'tag':
          if (command[1]) {
            let tag = command.slice(2)
            View.tagID(Model.tagID(command[1], tag))

          }
          break
          case 'filter':
            if (command[1]) {
              View.filterTag(Model.filterTag(command[1]))
            }
            break

      }
    } else {
      View.helpView()
    }
  }

  showHelp() {
    View.helpView()
  }
}


module.exports = Controller;
