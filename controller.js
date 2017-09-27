let model = require('./model')
let view = require('./view')

class Controller {
	static help(){
		view.help()
	}
	static list(){
		model.list(data => {
			view.list(data)
		})
	}
	static add(input){
		model.add(input,res=>{
			view.add(res)
		})
	}
	static delete(input){
		model.delete(input,res=>{
			view.delete(res)
		})
	}
	static complete(input) {
		model.complete(input)
	}
	static uncomplete(input) {
		model.uncomplete(input)
	}
	static find(input) {
		model.find(input,(data) => {
			console.log(data)
		})
	}
}
module.exports = Controller