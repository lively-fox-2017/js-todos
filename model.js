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
				temp1 = id[i]+'.[x] '+temp[id[i]][0]+' '+temp[id[i]][2]
			}else{
				temp1 = id[i]+'.[ ] '+temp[id[i]][0]+' '+temp[id[i]][2]
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

	compareList(){
		let temp = ''
		let hasil = ''
		let key = []
		let temp1 = []
		let temp3 = []
		this.readList()
		//console.log(this.list)
		temp = JSON.parse(fs.readFileSync('data.json'))
		key = Object.keys(temp)
		//console.log(key)
		//console.log(temp[key[0]][0])

		for(let i=0; i<key.length; i++){
			temp1[i] = [key[i], temp[key[i]][0], temp[key[i]][1], temp[key[i]][2] ]
		}

		
		//console.log(temp)
		var swapped

    	do {
        	swapped = false;
        	for (var i=0; i < temp1.length-1; i++) {
            	if ((temp1[i][3] < temp1[i+1][3])) {
                	var temp2 = temp1[i];
                	temp1[i] = temp1[i+1];
                	temp1[i+1] = temp2;
                	swapped = true;
            	}
        	}
    	} while (swapped)

    	for(let i = 0; i<temp1.length; i++){
			if(temp1[i][2]===true){
				hasil = temp1[i][0]+'.[x] '+temp1[i][1]+' '+temp1[i][3]
			}else{
				hasil = temp1[i][0]+'.[ ] '+temp1[i][1]+' '+temp1[i][3]
			}
			temp3.push(hasil)
			hasil = ''
		}

    	return temp3
	}
}

  // let a = new Model()
  // a.compareList()
module.exports = Model
