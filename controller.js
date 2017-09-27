const model = require('./model.js') 
const view = require('./view.js')
class Controller {
	constructor() {

		this.help = []
		this.list = []
		this.a = new model()
		this.b = new view()

	}

	tampil(){
		this.a.readHelp()
		this.help = this.a.help
		this.b.tampilData(this.help)
		
		//return this
	}

	tampilList(){
		this.a.readList()
		this.list = this.a.list
		this.b.tampilData(this.list)

	}

	addList(data){
		this.a.addList(data)
		this.b.addList(data)
	}

	findList(data){
		let c = this.a.findList(data)
		this.b.findList(c)
	}

	deleteList(data){
		let c = this.a.deleteList(data)
		this.b.deleteList(c)
	}

	completeList(data){
		this.a.completeList(data)
	}

	uncompleteList(data){
		this.a.uncompleteList(data)	
	}

	ascList(){
		let temp = this.a.compareList()
		this.b.tampilData(temp)
	}

}

// let a = new Controller()
// a.ascList()
module.exports = Controller
