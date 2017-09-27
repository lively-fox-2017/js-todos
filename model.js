const fs = require('fs')

class Model {
  constructor(){

  }

  static bacaFileBiasa() {
    let string = fs.readFileSync('data.json','utf-8')
    let file = JSON.parse(string)

    return file
  }

  static bacaFile() {
    let string = fs.readFileSync('data.json','utf-8')
    let file = JSON.parse(string)
    // return file

    let arr = []
    let tampung = file
    for (let i = 0; i < tampung.length; i++) {
      if (tampung[i].complete == true) {
          arr.push(`${i+1}. [x] ${tampung[i].task}`)
      } else {
          arr.push(`${i+1}. [ ] ${tampung[i].task}`)
      }
    }
    return arr.join('\n')
  }

  static tambahFile(dataAdd) {
    let data = Model.bacaFileBiasa()
    // console.log(typeof data);
    let newTambah = {
      "id" : (data[data.length -1].id + 1), //21
      "task" : dataAdd
    }
    data.push(newTambah)
    fs.writeFileSync('data.json', JSON.stringify(data,null,2), 'utf-8')
  }

  static cariFile(dataCari){
    // console.log(dataCari);
    let data = Model.bacaFileBiasa()
    let tampung = []
    // console.log(data.length);
    for (let i = 0; i < data.length; i++) {
      if (data[i].id == dataCari){
        // console.log(data[i]);
        tampung.push(data[i])
      }
    }

    return tampung
  }

  static hapusFile(dataHapus){
    let data = Model.bacaFileBiasa()

    for (let i = 0; i < data.length; i++) {
      if (data[i].id == dataHapus){
        data.splice(i,1);
      }
    }
    fs.writeFileSync('data.json', JSON.stringify(data,null,2), 'utf-8')
  }

}

module.exports = Model;
