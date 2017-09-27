const Controller = require('./controller.js')
class Index {
	constructor() {

	}

	jalan(){
		let control = new Controller()
		let temp = []
		let i=0,a=0
		process.argv.forEach((val) => {

  		if(i>1){
    		temp[a]=val
    		a++
  		}
  		i++
		});

		if(temp[0] === 'help'){
			control.tampil()
		}

		if(temp[0] === 'list'){
			control.tampilList()
		}

		if(temp[0] === 'add'){
			control.addList(temp[1])
		}

		if(temp[0] === 'task'){
			control.findList(temp[1])
		}

		if(temp[0] === 'delete'){
			control.deleteList(temp[1])
		}

		if(temp[0] === 'complete'){
			control.completeList(temp[1])
		}

		if(temp[0] === 'uncomplete'){
			control.uncompleteList(temp[1])
		}				
		
	}
}

let a = new Index()
a.jalan()