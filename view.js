class View {
  constructor() {

  }
  showHelp() {
    var string = "\n";
    string += 'node todo.js\n';
    string += 'node todo.js help\n';
    string += 'node todo.js list\n';
    string += 'node todo.js add <task_content>\n';
    string += 'node todo.js task <task_id>\n';
    string += 'node todo.js delete <task_id>\n';
    string += 'node todo.js complete <task_id>\n';
    string += 'node todo.js uncomplete <task_id>\n';

    return string;
  }
  showList(dataList) {
    var string = "\nTo Do List \n";
    string += "----------------------------------\n"
    for (var i = 0; i < dataList.length; i++) {
      var completed = "[ ]"
      if (dataList[i].completeAt !== "") {
        completed = "[x]"
      }
      string += completed + " " + dataList[i].id + '. ' + dataList[i].task + "\n";
    }
    return string;
  }
  showInvalidCommand() {
    return 'No such commands found';
  }
  showNotification(proces, task) {
    var string = "";
    string += proces + " " + task + " your TODO list";
    return string;
  }
  showNotFound() {
    return "Sorry data not found :(";
  }
}

module.exports = View;
