let fs = require('fs')
let data = JSON.parse(fs.readFileSync('data.json', 'utf8'))

class Model {
  static helpData() {
    let hint = ['$ node todo.js',
                '$ node todo.js help',
                '$ node todo.js list',
                '$ node todo.js add <task_content>',
                '$ node todo.js task <task_id>',
                '$ node todo.js delete <task_id>',
                '$ node todo.js complete <task_id>',
                '$ node todo.js uncomplete <task_id>',
                '$ node todo.js list:created asc|desc',
                '$ node todo.js list:completed asc|desc',
                '$ node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>',
                '$ node todo.js filter:<tag_name>']
    return hint.join('\n');
  }

  static listData() {
    return data;
  }

  static addData(newNote) {
    let newData = {
      status: "[ ]",
      note: newNote,
      complete: false,
      createDate: new Date()
    }
    data.push(newData)
    let dataSave = JSON.stringify(data);
    fs.writeFileSync('data.json', dataSave);
  }

  static delData(id){
    data.splice(id-1, 1)
    let dataSave = JSON.stringify(data);
    fs.writeFileSync('data.json', dataSave);
  }

  static compData(id) {
    let comp = []
      for (var i = 0; i < data.length; i++) {
        if (id == i+1) {
          let temp = {
              status: "[X]",
              note: data[i].note,
              complete: true,
              createDate: data[i].createDate,
              compDate: new Date()
            }
          comp.push(temp)
        }else{
          comp.push(data[i])
        }
      }
    let dataSave = JSON.stringify(comp);
    fs.writeFileSync('data.json', dataSave,);
  }

  static uncompData(id) {
    let comp = []
      for (var i = 0; i < data.length; i++) {
        if (id == i+1) {
          let temp = {
              status: "[ ]",
              note: data[i].note,
              complete: true,
              createDate: data[i].createDate
            }
          comp.push(temp)
        }else{
          comp.push(data[i])
        }
      }
    let dataSave = JSON.stringify(comp);
    fs.writeFileSync('data.json', dataSave,);
  }


}

module.exports = Model
