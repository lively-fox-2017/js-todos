class View {
	static help(command) {
		if (command == 'help' || command == null) {
		console.log('node index.js\n' +
		'node index.js help\n' +
		'node index.js list\n' +
		'node index.js add <task_content>\n' +
		'node index.js task <task_id>\n' +
		'node index.js delete <task_id>\n' +
		'node index.js complete <task_id>\n' +
		'node index.js uncomplete <task_id>\n');
		} else {
		console.log('command not found');
		}
	}

	static list(command) {
		console.log('ToDo List:');
		for (var i = 0; i < command.length; i++) {
			console.log(`${command[i].id}. ${command[i].task}`);
		}
	}

	static delete(command) {
		console.log('ToDo List:');
		// for (var i = 0; i < command.length; i++) {
			console.log(`Delete from your ToDo List`);
		// }
	}
}

module.exports = View;