var fd = require('fs')
var string = fd.readFileSync('data.json', 'utf8')
var dataParse = JSON.parse(string)

class Model {
  constructor() {

  }

  static bacaData() {
    var fs = require('fs')
    var data = fs.readFileSync('data.json', 'utf8')
    return data
  }

  static tambahData(input) {

      dataParse.push({
        complete: '[ ]',
        task:input
      })
      var simpan = JSON.stringify(dataParse)
    fd.writeFileSync('data.json', simpan)
    return input
  }

  static temukan(input) {
    input = input - 1
    return dataParse[input]
  }

  static hapus(input) {
    input = input - 1
    var hapus = dataParse.splice(input, 1)
    var data = JSON.stringify(dataParse)
    fd.writeFileSync("data.json", data)
    return hapus[0]
  }

  static complete(input) {
    input = input - 1
    dataParse[input].complete = '[X]'
    var data = JSON.stringify(dataParse)
    fd.writeFileSync("data.json", data)
    return dataParse[input]
  }

  static uncomplete(input) {
    input = input - 1
    dataParse[input].complete = '[ ]'
    var data = JSON.stringify(dataParse)
    fd.writeFileSync('data.json', data)
    return dataParse[input]
  }
}

module.exports = Model;
