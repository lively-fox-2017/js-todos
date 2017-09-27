const Index = require('./index')
const View = require('./view')
const Model = require('./model')

class Controller {

	static menu(command){
		//console.log(command)
		switch(command[0]){
			case 'help' : View.help(); break;
			case 'list' : View.list(Model.list_list()); break;
			case 'add'  : Model.addAdd(command[1]);break; 
		}
	}

	

}

module.exports = Controller
