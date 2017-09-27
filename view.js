class View {
  static help() {
    console.log('$ node todo.js');
    console.log('$ node todo.js help');
    console.log('$ node todo.js list');
    console.log('$ node todo.js add <task_content>');
    console.log('$ node todo.js task <task_id>');
    console.log('$ node todo.js delete <task_id>');
    console.log('$ node todo.js complete <task_id>');
    console.log('$ node todo.js uncomplete <task_id>');
  }

  static list(listData) {
    for (var i = 0; i < listData.length; i++) {
      let done = (listData[i]['done']) ? '[x]' : '[ ]';
      console.log(`${(i + 1)}. ${done} ${listData[i]['task']}`);
    }
  }

  static addedRespon(newData) {
    console.log(`Added "${newData}" to your TODO list`);
  }

  static deletedRespon(taskId, task) {
    if (task)
      console.log(`Deleted "${task['task']}" from your TODO list`);
    else
      console.log(`Task ${taskId} Not Found`);
  }

  static findRespon(taskId, task) {
    if (task)
      console.log(`${taskId}. ${task['task']}`);
    else
      console.log(`Task ${taskId} Not Found`);
  }

  static completeRespon(taskId, task) {
    if (task)
      console.log(`Task: "${task['task']}" checked as done`);
    else
      console.log(`Task ${taskId} Not Found`);
  }

  static uncompleteRespon(taskId, task) {
    if (task)
      console.log(`Task: "${task['task']}" checked as undone`);
    else
      console.log(`Task ${taskId} Not Found`);
  }
}

module.exports = View;
