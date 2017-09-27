class View {
  constructor() {

  }

  static help() {
    console.log('node todo.js help')
    console.log('node todo.js list')
    console.log('node todo.js add <task_id>')
    console.log('node todo.js task  <task_id>')
    console.log('node todo.js delete <task_id>')
    console.log('node todo.js complete <task_id>')
    console.log('node todo.js uncomplete <task_id>')
  }

  static bacaData(tampung) {
    console.log(tampung);
  }

  static tampilkanCari(hasilCari) {
    console.log(hasilCari);
  }

  static tampilkanData(hasilDelete) {
    console.log(hasilDelete);
  }

}

module.exports = View;
