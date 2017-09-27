class View {
  static tampilData(data){
    for (var i = 0; i < data.length; i++) {
      if(data[i].status == true){
      console.log(`${i + 1} [X] ${data[i].task}`)
    } else {
      console.log(`${i + 1} [ ]${data[i].task}`)
    }
    }
  }

  static cariData(data){
    for (var i = 0; i < data.length-1; i++) {
      console.log(`${data[0]} ${data[1]}`)
    }
  }

  static deleteData(data){
    for (var i = 0; i < data.length-1; i++) {
      console.log(`Data yang dihapus adalah : ${data[0]} ${data[1]}`)
    }
  }

  static help() {
    console.log(`$ node todo.js`);
    console.log(`$ node todo.js help`);
    console.log(`$ node todo.js list`);
    console.log(`$ node todo.js add <task_content>`);
    console.log(`$ node todo.js find <task_id>`);
    console.log(`$ node todo.js delete <task_id>`);
    console.log(`$ node todo.js complete <task_id> `);
    console.log(`$ node todo.js uncomplete <task_id>`);
  }

}

module.exports = View
