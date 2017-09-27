class View {

  /**
   * @function printCommandNotFound
   * @param {String} command
   * Log: <command>: not found
   */
  printCommandNotFound(command) {

    console.log(`${command}: not found`);

  }

  /**
   * @function printHelp
   * Log list of available commands
   */
  printHelp() {

    const help = '$ node index\n$ node index help\n$ node index list\n$ node index add <task_content>\n$ node index task <task_id>\n$ node index delete <task_id>\n$ node index complete <task_id>\n$ node index uncomplete <task_id>\n$ node index list:created asc|desc\n$ node index list:completed asc|desc\n$ node index tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>\n$ node index filter:<tag_name>';

    console.log(help);

  }

  /**
   * @function printList
   * @param {Object} todos
   * Log list of tasks
   */
  printList(todos) {

    if (todos.length) {
      todos.forEach(function(task) {

        let xMark = '';

        if (task.completed)
          xMark = '[x]';
        else
          xMark = '[ ]';

        console.log(`${task.id}. ${xMark} ${task.name}`);

      });
    } else {

      console.log('Your todo is empty, yay!');

    }

  }

  /**
   * @function printMessage
   * @param {String} type
   * @param {Array/String} tasks
   * Log a message
   */
  printMessage(type, tasks) {

    let conjunction = (type.toLowerCase() === 'added') ? 'to' : 'from';

    let message = `${type} ${tasks} ${conjunction} your TODO list...`;

    console.log(message);

  }

  /**
   * @function printMessage
   * @param {String} name
   * @param {Array/String} tags
   * Log a message
   */
  printSuccessAddedTag(name, tags) {

    console.log(`Tagged task ${name} with tags: ${tags}`);

  }

  /**
   * @function printTask
   * @param  {Object} task
   * Log a task of taskId
   */
  printTask(task) {

    if (task.id) {

      let xMark = '';

      if (task.completed)
        xMark = '[x]';
      else
        xMark = '[ ]';

      console.log(`${task.id}. ${xMark} ${task.name}`);

    } else {

      console.log('Task not found.');

    }

  }

  /**
   * @function searchResult
   * @param  {Object} searchResult
   * Log search result (tag filter)
   */
  printTagFilter(searchResult) {

    searchResult.forEach(function(result) {

      console.log(`${result.id}. ${result.name} [${result.tags}]`);

    });

  }

  /**
   * @function printTaskNotFound
   * Log a message
   */
  printTaskNotFound() {

    console.log('Error, task not found.');

  }

}

module.exports = View;
