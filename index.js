let Controller = require('./controller');
let command = process.argv;

class ToDo {
	static inputCommand(command, arg) {
		Controller.todoCommand(command, arg);
	}
}

ToDo.inputCommand(command[2], command[3]);
// console.log('ini' + command[2], 'itu ' + command[3])

module.exports = ToDo;