const fs = require('fs');

class Model {
	static read() {
		const data = fs.readFileSync('data.json', 'utf8');
		if (data) {
			const todos = JSON.parse(data);
			return todos;
		} else {
			return null;
		}
	}

	static save(todos) {
		fs.writeFileSync('data.json', JSON.stringify(todos, null, 4));
	}

	static find(id) {
		const todos = this.read();
		for (let i = 0; i < todos.length; i++) {
			if (todos[i].id === id) return i;
		}
		return null;
	}

	static checkAvailability(todos, id) {
		if (todos[id - 1]) return true;
		else return false;
	}

	static addTodo(todo) {
		let todos = this.read();
		todo = {
			id: todos ? todos.slice(-1)[0].id + 1 : 1,
			todo: todo,
			isComplete: false,
			dateCreated: new Date().toUTCString(),
			dateCompleted: null,
			tags: []
		};

		if (todos) todos.push(todo);
		else todos = [todo];

		this.save(todos);
		return todo;
	}

	static getTask(id) {
		const todos = this.read();
		const idx = this.find(id);
		if (idx || idx === 0) return todos[idx];
		else return null;
	}

	static deleteTask(id) {
		const todos = this.read();
		const idx = this.find(id);
		if (idx || idx === 0) {
			const deleted = todos.splice(idx, 1)[0];
			this.save(todos);
			return deleted;
		} else {
			return null;
		}
	}

	static completeTask(id) {
		const todos = this.read();
		const idx = this.find(id);
		if (idx || idx === 0) {
			if (!todos[idx].isComplete) {
				todos[idx].isComplete = true;
				todos[idx].dateCompleted = new Date().toUTCString();
				this.save(todos);
			}
			return todos[idx];
		} else {
			return null;
		}
	}

	static uncompleteTask(id) {
		const todos = this.read();
		const idx = this.find(id);
		if (idx || idx === 0) {
			if (todos[idx].isComplete) {
				todos[idx].isComplete = false;
				todos[idx].dateCompleted = null;
				this.save(todos);
			}
			return todos[idx];
		} else {
			return null;
		}
	}

	static addTags(id, tags) {
		const todos = this.read();
		const idx = this.find(id);
		if (idx || idx === 0) {
			todos[idx].tags = todos[idx].tags.concat(tags);
			this.save(todos);
			return todos[idx];
		} else {
			return null;
		}
	}

	static filterByTag(tag) {
		const todos = this.read();
		const filtered = todos.filter(todo => todo.tags.indexOf(tag) !== -1);

		if (filtered.length > 0) {
			return filtered;
		} else {
			return null;
		}
	}

	static sortDateCreated(arg) {
		const todos = this.read();
		let sorted;

		if (arg === 'asc') {
			sorted = todos.sort((a, b) => new Date(a.dateCreated) - new Date(b.dateCreated));
		} else {
			sorted = todos.sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated));
		}

		if (sorted.length > 0) return sorted;
		else return null;
	}

	static sortDateCompleted(arg) {
		const todos = this.read();
		const todosCompleted = todos.filter(todo => todo.isComplete);
		let sorted;

		if (arg === 'asc') {
			sorted = todosCompleted.sort((a, b) => new Date(a.dateCompleted) - new Date(b.dateCompleted));
		} else {
			sorted = todosCompleted.sort((a, b) => new Date(b.dateCompleted) - new Date(a.dateCompleted));
		}

		if (sorted.length > 0) return sorted;
		else return null;
	}
}

module.exports = Model;