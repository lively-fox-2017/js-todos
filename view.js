class View {
  constructor() {

  }

  static showHelp() {
    console.log(' node index.js help\n', 'node index.js list\n', 'node index.js add <task_content>\n', 'node index.js task <task_id>\n', 'node index.js delete <task_id>\n', 'node index.js complete <task_id>\n', 'node index.js uncomplete <task_id>\n');
  }

  static showErr() {
    console.log('please input : node index.js help');
  }

  static showList(list) {
    console.log(list);
  }
}

module.exports = View;
