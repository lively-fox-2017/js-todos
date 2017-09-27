const util = require('util');
const fs = require('fs');

const Model = require('./model.js');
const View = require('./view.js');

const TodoModel = new Model;
const TodoView = new View;

class Controller {

  /**
   * @function command
   * @param {Array} args
   * Check what command is typed and invoke
   * the function of that command (validate)
   *
   *
   * FOREWARNING: THIS FUNCTION'S CODE IS SO DIRTY.
   *              YOU MIGHT GET SICK OF IT, SORRY.
   *
   */
  command(args) {

    const command = args[0];

    // Filter
    if (command.split(':')[0] === 'filter' && command.split(':').length === 2) {

      let tag = command.split(':')[1];

      this.filter(tag);

      return 0;

    }

    // All except filter
    switch(command) {
      case 'help':
        this.help();
        break;
      case 'list':
        this.list();
        break;
      case 'list:created':
        this.sortedList('created_date', args[1] || 'desc');
        break;
      case 'list:completed':
        this.sortedList('completed_date', args[1] || 'desc');
        break;
      case 'tag':
        this.tag(parseInt(args[1]), args.slice(2));
        break;
      case 'add':
        this.add(args.slice(1));
        break;
      case 'task':
        this.task(parseInt(args[1]));
        break;
      case 'delete':
        this.delete(parseInt(args[1]));
        break;
      case 'complete':
        this.complete(parseInt(args[1]));
        break;
      case 'uncomplete':
        this.uncomplete(parseInt(args[1]));
        break;
      default:
        this.commandNotFound(command);
        break;
    }

  }

  /**
   * @function commandNotFound
   * @param {String} command
   * Log: <command>: not found
   */
  commandNotFound(command) {

    TodoView.printCommandNotFound(command);

  }

  /**
   * @function help
   * Log list of available commands
   */
  help() {

    TodoView.printHelp();

  }

  /**
   * @function list
   * Log list of tasks
   */
  list() {

    const todos = TodoModel.parseJSON();

    TodoView.printList(todos);

  }

  /**
   * @function sortedList()
   * @param  {String} sortBy
   * @param  {String} sortType
   * Log sorted list of tasks by their created_date
   */
  sortedList(sortBy, sortType) {

    const validSortType = ['asc', 'desc'];
    let todos = TodoModel.parseJSON();

    if (validSortType.indexOf(sortType) !== -1)
      todos = TodoModel.sort(sortBy, sortType);
    else
      todos = TodoModel.sort(sortBy, sortType);

    TodoView.printList(todos);

  }

  /**
   * @function add
   * @param {Array} tasks
   * Add a task
   */
  add(tasks) {

    let added = TodoModel.create(tasks);

    if (added)
      TodoView.printMessage('Added', added);

  }

  /**
   * @function tag
   * @param  {[type]} taskId
   * @param  {[type]} tags
   */
  tag(taskId, tags) {

    let find = TodoModel.findById(taskId).name;

    if (find) {

      if (TodoModel.addTags(taskId, tags))
        TodoView.printSuccessAddedTag(find, tags);

    } else {

      TodoView.printTaskNotFound();

    }

  }

  /**
   * @function task
   * @param  {Integer} taskId
   * Log a task of taskId
   */
  task(taskId) {

    let taskObj = TodoModel.findById(taskId);

    TodoView.printTask(taskObj);

  }

  /**
   * @function delete
   * @param  {Integer} taskId
   * Delete a task of taskId
   */
  delete(taskId) {

    let find = TodoModel.findById(taskId).name;

    if (find) {

      if (TodoModel.destroy(taskId))
        TodoView.printMessage('Deleted', find);

    } else {

      TodoView.printTaskNotFound();

    }

  }

  /**
   * @function complete
   * @param  {Integer} taskId
   * Complete a task of taskId
   */
  complete(taskId) {

    let find = TodoModel.findById(taskId).name;

    if (find) {

      if (TodoModel.changeCompletedStatus(taskId, true))
        TodoView.printMessage('Completed', find);

    } else {

      TodoView.printTaskNotFound();

    }

  }

  /**
   * @function uncomplete
   * @param  {Integer} taskId
   * Uncomplete a task of taskId
   */
  uncomplete(taskId) {

    let find = TodoModel.findById(taskId).name;

    if (find) {

      if (TodoModel.changeCompletedStatus(taskId, false))
        TodoView.printMessage('Uncompleted', find);

    } else {

      TodoView.printTaskNotFound();

    }

  }

  /**
   * @function filter
   * @param  {String} tag
   * Find tasks with given tag
   */
  filter(tag) {

    let searchResult = TodoModel.findByTag(tag);

    if (searchResult.length > 0) {

      TodoView.printTagFilter(searchResult);

    } else {

      TodoView.printTaskNotFound();

    }

  }

}

module.exports = Controller;
