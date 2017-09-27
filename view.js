class View {
  constructor() {

  }
  showHelp() {
    var string = "";
    string += 'node todo.js';
    string += 'node todo.js help';
    string += 'node todo.js list';
    string += 'node todo.js add <task_content>';
    string += 'node todo.js task <task_id>';
    string += 'node todo.js delete <task_id>';
    string += 'node todo.js complete <task_id>';
    string += 'node todo.js uncomplete <task_id>';

    return string;
  }
  showList() {

  }
  showInvalidCommand() {
    return 'No such commands found';
  }
}

module.exports = View;
