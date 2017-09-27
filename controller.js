"use strict"
const View = require('./view');
const Model = require('./model');

class Controller {
	static menu(input) {
		const command = input[0];
		const arg = input.slice(1);

		switch(command) {
		case undefined:
		case 'help':
			this.help();
			break;
		case 'list':
			this.list(arg);
			break;
		case 'list:created':
			this.listCreated(arg);
			break;
		case 'list:completed':
			this.listCompleted(arg);
			break;
		case 'tag':
			this.tag(arg);
			break;
		case 'filter:':
			this.filterByTag(arg);
			break;
		case 'add':
			this.addTodo(arg);
			break;
		case 'task':
			this.task(arg);
			break;
		case 'delete':
			this.del(arg);
			break;
		case 'complete':
			this.complete(arg);
			break;
		case 'uncomplete':
			this.uncomplete(arg);
			break;
		default:
			View.errorLog(1);
		}
	}

	static help() {
		View.helpLog();
	}

	static list(arg) {
		if (arg.length === 0) {
			const todos = Model.read();
			if (todos) View.showList(todos);
			else View.errorLog(8);
		} else {
			View.errorLog(2);
		}	
	}

	static addTodo(todo) {
		if (todo.length > 0) {
			const added = Model.addTodo(todo.join(' '));
			if (added) View.success('add', added);
			else View.errorLog(3);
		} else {
			View.errorLog(2);
		}
	}

	static task(id) {
		if (id.length === 1) {
			const task = Model.getTask(Number(id[0]));
			if (task) View.showTask(task);
			else View.errorLog(4);
		} else {
			View.errorLog(2);
		}
	}

	static del(id) {
		if (id.length === 1) {
			const deleted = Model.deleteTask(Number(id[0]));
			if (deleted) View.success('delete', deleted);
			else View.errorLog(5); // Failed to delete task;
		} else {
			View.errorLog(2);
		}
		
	}

	static complete(id) {
		if (id.length === 1) {
			const completed = Model.completeTask(Number(id[0]));
			if (completed) View.success('complete', completed);
			else View.errorLog(6) // failed to complete task;
		} else {
			View.errorLog(2);
		}
	}

	static uncomplete(id) {
		if (id.length === 1) {
			const uncompleted = Model.uncompleteTask(Number(id[0]));
			if (uncompleted) View.success('uncomplete', uncompleted);
			else View.errorLog(7) // failed to uncomplete task;
		} else {
			View.errorLog(2);
		}
	}

	static listCreated(orderBy) {
		if (orderBy.length === 1) {
			const sorted = Model.sortDateCreated(orderBy[0]);
			if (sorted) View.showList(sorted);
			else View.errorLog();
		} else {
			View.errorLog(2);
		}
	}

	static listCompleted(orderBy) {
		if (orderBy.length === 1) {
			const sorted = Model.sortDateCompleted(orderBy[0]);
			if (sorted) View.showList(sorted);
			else View.errorLog(); 
		} else {
			View.errorLog(2);
		}
	}

	static tag(arg) {
		const id = arg[0];
		const tags = arg.slice(1);

		if (id && tags.length > 0) {
			const tagged = Model.addTags(Number(id), tags);
			if (tagged) View.success('tag', tagged);
			else View.errorLog(9);
		} else {
			View.errorLog(2);
		}
	}

	static filterByTag(tag) {
		if (tag.length === 1) {
			const filtered = Model.filterByTag(tag[0]);
			if (filtered) View.showList(filtered);
			else View.errorLog(10);
		} else {
			View.errorLog(2);
		}
	}
}

module.exports = Controller;