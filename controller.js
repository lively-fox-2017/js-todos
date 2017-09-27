const Index = require('./index')
const View = require('./view')
const Model = require('./model')

class Controller {

	static menu(command){
		switch(command){
			case 'help' : View.help(); break;
			case 'list' : View.viewList(Model.list()); break;
		}
	}

}

module.exports = Controller
