"use strict"

class View {
	static helpLog() {
		console.log(
			'node index.js help' + '\n' +
			'node index.js list' + '\n' +
			'node index.js list:created asc|desc' + '\n' +
			'node index.js list:completed asc|desc' + '\n' +
			'node index.js add <todo>' + '\n' +
			'node index.js task <id>' + '\n' +
			'node index.js delete <id>' + '\n' +
			'node index.js complete <id>' + '\n' +
			'node index.js uncomplete <id>' + '\n' +
			'node index.js tag: <tag1> <tag2> <tag3> <tag...>' + '\n' +
			'node index.js filter: <tag>' + '\n'
			);
	}

	static showList(todos) {
		todos.forEach((todo, idx) => {
				console.log(
					`${idx + 1}. [${todo.isComplete ? 'V' : ' '}] ${todo.todo}`
				);
			});
	}

	static showTask(task) {
		console.log(`${task.id} [${task.isComplete ? 'V' : ' '}] ${task.todo}`);
	}

	static success(type, obj) {
		switch(type) {
		case 'add':
			console.log(`'${obj.todo}' is successfully added`);
			break;
		case 'delete':
			console.log(`'${obj.todo}' is successfully deleted`);
			break;
		case 'complete':
			console.log(`'${obj.todo}' is done`);
			break;
		case 'uncomplete':
			console.log(`'${obj.todo}' is uncompleted`);
			break;
		case 'tag':
			console.log(`'${obj.todo}' is successfully tagged`);
			break;
		}

	}

	static errorLog(type) {
		switch(type) {
		case 1:
			console.log('Command not found. Type `node index.js help` for help.');
			break;
		case 2:
			console.log('Invalid argument(s)');
			break;
		case 3:
			console.log('Failed to add data');
			break;
		case 4:
			console.log('Failed to retrieve task');
			break;
		case 5:
			console.log('Failed to delete task');
			break;
		case 6:
			console.log('Failed to complete task');
			break;
		case 7:
			console.log('Failed to uncomplete task');
			break;
		case 8:
			console.log('No task available');
			break;
		case 9:
			console.log('Failed to tag task');
			break;
		case 10:
			console.log('No task found with such tag');
			break;
		case 11:
			console.log('No result found');
			break;
		default:
			console.log('Something is definitely wrong, dude/dudettes ... Stay calm.');
		}
	}
}

module.exports = View;