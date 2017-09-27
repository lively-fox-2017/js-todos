const fs = require('fs');

class Model {

  /**
   * @function readJSON
   * @return {String}
   * Read from data.json
   */
  readJSON() {

    return fs.readFileSync('data.json', 'utf-8');

  }

  /**
   * @function parseJSON
   * @return {Object}
   * Parse as JSON from data.json
   */
  parseJSON() {

    let fileContent = this.readJSON();

    return JSON.parse(fileContent);

  }

  /**
   * @function getLastId
   * @return {Integer}
   * Get the last id of data.json
   */
  getLastId() {

    let fileContent = this.parseJSON();

    if (fileContent.length)
      return fileContent[fileContent.length - 1].id;

    return 0;

  }

  /**
   * @function findById
   * @param  {Integer} taskId
   * @return {Object}
   * Finding task by id
   */
  findById(taskId) {

    let fileContent = this.parseJSON();

    for (let index in fileContent) {

      if (fileContent[index].id === taskId)
        return fileContent[index];

    }

    return [];

  }

  /**
   * @function create
   * @param  {Array} tasks
   * @return {Array}
   * Create new tasks
   */
  create(tasks) {

    let lastId = this.getLastId();
    let currentTodos = this.parseJSON();
    let added = [];
    let date = new Date;

    tasks.forEach(function(taskName) {

      lastId += 1;

      const newTask = {
        id: lastId,
        name: taskName,
        completed: false,
        created_date: date.toISOString(),
        completed_date: null,
        tags: []
      };

      currentTodos.push(newTask);

      added.push(newTask.name);

    });

    fs.writeFileSync('data.json', JSON.stringify(currentTodos, null, '\t'));

    return added;

  }

  /**
   * @function addTags
   * @param {Integer} taskId
   * @param {Array} tags
   */
  addTags(taskId, tags) {

    let currentTodos = this.parseJSON();

    for (let index in currentTodos) {

      if (currentTodos[index].id === taskId) {

        tags.forEach(function(tag) {

          if (currentTodos[index].tags.indexOf(tag.toLowerCase()) === -1)
            currentTodos[index].tags.push(tag.toLowerCase());

        });

        break;

      }

    }

    fs.writeFileSync('data.json', JSON.stringify(currentTodos, null, '\t'));

    return true;

  }

  /**
   * @function destroy
   * @param  {Integer} taskId
   * @return {Boolean}
   * Delete a task of taskId
   */
  destroy(taskId) {

    let indexToDelete = null;
    let currentTodos = this.parseJSON();

    for (let index in currentTodos) {

      if (currentTodos[index].id === taskId) {
        indexToDelete = index;
        break;
      }

    }

    currentTodos.splice(indexToDelete, 1);

    fs.writeFileSync('data.json', JSON.stringify(currentTodos, null, '\t'));

    return true;

  }

  /**
   * @function changeCompletedStatus
   * @param  {Integer} taskId
   * @param  {Boolean} newStatus
   * Change task's completed status
   */
  changeCompletedStatus(taskId, newStatus) {

    let currentTodos = this.parseJSON();

    for (let index in currentTodos) {

      if (currentTodos[index].id === taskId) {

        let date = new Date;

        currentTodos[index].completed = newStatus;

        if (newStatus)
          currentTodos[index].completed_date = date.toISOString();
        else
          currentTodos[index].completed_date = null;

        break;
      }

    }

    fs.writeFileSync('data.json', JSON.stringify(currentTodos, null, '\t'));

    return true;

  }

  /**
   * @function sort
   * @param  {String} sortBy   [description]
   * @param  {String} sortType [description]
   * sort todos
   */
  sort(sortBy, sortType) {

    let todos = this.parseJSON();

    // Fetch completed tasks only if sortBy is completed_date
    if (sortBy === 'completed_date') {

      for (let index in todos) {

        // Filtering
        if (!todos[index].completed)
          todos.splice(index, 1);

      }

    }

    if (sortType === 'asc') {

      todos = todos.sort(function(x, y) {
        return x[sortBy] > y[sortBy];
      });

    } else {

      todos = todos.sort(function(x, y) {
        return x[sortBy] < y[sortBy];
      });

    }


    return todos;

  }

  /**
   * @function findByTag
   * @param  {String} tag
   * Find tasks by tag
   */
  findByTag(tag) {

    let todos = this.parseJSON();

    // I have no idea why this isn't working...
    // for (let index in todos) {
    //
    //   // Filtering
    //   if (todos[index].tags.indexOf(tag) === -1)
    //     todos.splice(index, 1);
    //
    // }

    todos = todos.filter(function(todo) {

      return todo.tags.indexOf(tag) !== -1;

    });

    return todos;

  }

}

module.exports = Model;
