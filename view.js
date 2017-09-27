class View {
  static help() {
    console.log('=================================');
    console.log('node todo.js help');
    console.log('node todo.js list');
    console.log('node todo.js add <task_content>');
    console.log('node todo.js task <task_id>');
    console.log('node todo.js delete <task_id>');
    console.log('node todo.js complete <task_id>');
    console.log('node todo.js uncomplete <task_id>');
  }

  static tampilList(input) {
    var dataParse = JSON.parse(input)

    console.log('===========list==============')

    for(var i = 0; i < dataParse.length; i++) {
      console.log((i+1) + '.' + dataParse[i].complete + ' ' + dataParse[i].task);
    }
  }

  static tampilTambahData(input) {
    console.log('Added ' + "'" + input + "'" + ' to your TODO list');
  }

  static tampilCariData(no, input) {
    console.log(no + '.' +' ' + input.task);
  }

  static tampilHapusData(input) {
    console.log('Deleted ' + input.task + ' from TODO list');
  }

  static tampilComplete(input) {
    console.log(input.task + ' complate');
  }

  static TampilUncomplete(input) {
    console.log(input.task + ' uncomplate');
  }
}

module.exports = View;
