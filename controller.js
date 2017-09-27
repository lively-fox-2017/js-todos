const View = require('./view')
const Model = require('./model')

class Controller {
  constructor() {

  }

   main(command) {
    //  console.log(data);
    switch(command[0]) {
      case "help" :
        View.help()
        break;
      case "list" :
        let data = Model.bacaFile()
        View.bacaData(data)
        break;
      case "add" :
        let dataAdd = command[1]
        Model.tambahFile(dataAdd)
        break;
      case "task" :
        let dataCari = command[1]
        let hasilCari = Model.cariFile(dataCari)
        View.tampilkanCari(hasilCari)
        break;
      case "delete" :
        let dataHapus = command[1]
        let hasilDelete = Model.hapusFile(dataHapus)
        View.tampilkanData(hasilDelete)
    }
  }

}

module.exports = Controller
