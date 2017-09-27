let Model = require('./model');
let View = require('./view');

class Controller {
	static todoCommand(command, arg) {
		if (command == 'help') {
			View.help(command);	
		} else if (command == 'list') {
			let dataList = Model.bacaFile(command);
			View.list(dataList);
		} else if (command == 'add') {
			let dataAdd = Model.tambahData(arg);
			View.list(dataAdd);
		} else if (command == 'task') {
			let findData = [Model.cariData(arg)];
			View.list(findData);
		} else if (command == 'delete') {
			let deleteData = Model.deleteData(arg);
			View.delete(deleteData);
			// console.log(deleteData);
		} else if (command == 'complete') {
			let completeData = Model.deleteData(arg);
			View.delete(completeData);
			// console.log(deleteData);
		}
	}
}

// Controller.todoCommand();

module.exports = Controller;