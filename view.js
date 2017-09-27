class View {
  static help() {
    console.log('$ node todo.js');
    console.log('$ node todo.js help');
    console.log('$ node todo.js list');
    console.log('$ node todo.js list:created asc|desc');
    console.log('$ node todo.js list:completed asc|desc');
    console.log('$ node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>');
    console.log('$ node todo.js add <task_content>');
    console.log('$ node todo.js task <task_id>');
    console.log('$ node todo.js delete <task_id>');
    console.log('$ node todo.js complete <task_id>');
    console.log('$ node todo.js uncomplete <task_id>');
    console.log('$ node todo.js filter:<tag_name>');
  }

  static list(listData) {
    if (listData.length > 0) {
      for (var i = 0; i < listData.length; i++) {
        let done = (listData[i]['done']) ? '[x]' : '[ ]';
        console.log(`${listData[i]['id']}. ${done} ${listData[i]['task']}`);
      }
    } else {
      console.log('No Data Found');
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
      console.log(`${task['id']}. ${task['task']}`);
    else
      console.log(`Task ${taskId} Not Found`);
  }

  static completeRespon(taskId, task) {
    if (task) {
      if (task === 'done')
        console.log(`Task ${taskId} already done`);
      else
        console.log(`Task: "${task['task']}" checked as done`);
    } else
      console.log(`Task ${taskId} Not Found`);
  }

  static uncompleteRespon(taskId, task) {
    if (task)
      if (task === 'undone')
        console.log(`Task ${taskId} already undone`);
      else
        console.log(`Task: "${task['task']}" checked as undone`);
    else
      console.log(`Task ${taskId} Not Found`);
  }

  static tagRespon(taskId, task, tag) {
    if (task)
      console.log(`Tagged task "${task['task']}" with tags: ${tag}`);
    else
      console.log(`Task ${taskId} Not Found`);
  }
}

module.exports = View;
