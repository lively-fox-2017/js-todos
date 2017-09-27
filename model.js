const fs = require('fs')
const jsonfile = require('jsonfile')
class Model {
	constructor(){
		this.help = []
		this.list = []
	}

	readHelp(){
		let temp = ''
		//this.help = JSON.parse(fs.readFileSync('data.json').toString().split('\n'))
		temp = JSON.parse(fs.readFileSync('help.json'))
		for(let i=0;i<temp.help.length;i++){
			this.help[i] = '$ node index.js '+temp.help[i]
		}

		return this
	}

	readList(){
		let temp = ''
		let temp1 = ''
		let id = []
		let list = []

		temp = JSON.parse(fs.readFileSync('data.json'))
		//console.log(temp[2][1])
		id = Object.keys(temp)
		for(let i = 0; i<id.length; i++){
			if(temp[id[i]][1]===true){
				temp1 = id[i]+'.[x] '+temp[id[i]][0]
			}else{
				temp1 = id[i]+'.[ ] '+temp[id[i]][0]
			}
			this.list.push(temp1)
			temp1 = ''
		}
		
		return this
	}

	addList(data){
		let temp = ''
		let temp1 = 0
		let id = []

		temp = JSON.parse(fs.readFileSync('data.json'))
		id = Object.keys(temp)
		temp1 = parseInt(id[id.length-1])+1
		temp[temp1] = [data, false, Date()]

    	// jsonfile.writeFile('data.json', temp, function (err) {
     //  		console.error(err)
    	// })

    	jsonfile.writeFileSync('data.json', temp, {spaces: 2, EOL: '\r\n'})
	}

	findList(data){

		let temp =[]
		let find = ''

		this.readList()
		for(let i=0;i<this.list.length;i++){
			if(this.list[i][0]===data){
				find = this.list[i]
			}	
		}

		return find 
	}

	deleteList(data){

		this.readList()
		let temp = ''
		let temp1 = []
		let hasil = ''
		temp = JSON.parse(fs.readFileSync('data.json'))
		for(let i=0;i<this.list.length;i++){
			if(this.list[i][0]===data){
				temp1 = this.list[i].split('.')
				hasil = temp1[1]
			}	
		}
		delete temp[data]
		jsonfile.writeFile('data.json', temp, function (err) {
    	})

    	return hasil
	}

	completeList(data){
		
		this.readList()
		let temp = ''
		let temp1 = []
		let hasil = ''
		temp = JSON.parse(fs.readFileSync('data.json'))
		for(let i=0;i<this.list.length;i++){
			if(this.list[i][0]===data){
				temp[data][1] = true 
			}	
		}
		// delete temp[data]
		jsonfile.writeFile('data.json', temp, function (err) {
    	})		
	}

	uncompleteList(data){

		this.readList()
		let temp = ''
		let temp1 = []
		let hasil = ''
		temp = JSON.parse(fs.readFileSync('data.json'))
		for(let i=0;i<this.list.length;i++){
			if(this.list[i][0]===data){
				temp[data][1] = false 
			}	
		}
		// delete temp[data]
		jsonfile.writeFile('data.json', temp, function (err) {
    	})	
	}

}

module.exports = Model
