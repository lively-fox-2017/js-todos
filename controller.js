const View = require('./View')
const Model = require('./Model')

class Controller {
  constructor() {
    this.code = 'mbahmu'
  }

  static menu(command) {
    if(command[0] == 'help') {
      View.help()
    }

    if(command[0] == 'list') {
      var data = Model.bacaData()
      View.tampilList(data)
    }

    if(command[0] == 'add') {
      var input = command[1]
      Model.tambahData(input)
    }

    if(command[0] == 'find') {
      var input = command[1]
      var data = Model.temukan(input)
      View.tampilCariData(input, data)
    }

    if(command[0] == 'hapus') {
      var input = command[1]
      var data = Model.hapus(input)
      View.tampilHapusData(data)
    }

    if(command[0] == 'complete') {
      var input = command[1]
      var data = Model.complete(input)
      View.tampilComplete(data)
    }

    if(command[0] == 'uncomplete') {
      var input = command[1]
      var data = Model.uncomplete(input)
      View.TampilUncomplete(data)
    }
  }
}

module.exports = Controller
