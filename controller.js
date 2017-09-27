const View = require('./View')

class Controller {
  constructor() {
    this.code = 'mbahmu'
  }

  static menu(command) {
    if(command[0] == 'help') {
      View.help()
    }
  }
}

module.exports = Controller
