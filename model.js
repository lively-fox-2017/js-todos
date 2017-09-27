const Controller = require('./controller')

let fs = require('fs')
let data = JSON.parse(fs.readFileSync('data.json'))
// console.log(data)


class Model {
	// constructor(){

	// }

	static list(){
		let hasilList='';
		
		for (let i = 0;i<data.length;i++){
			hasilList+= (i+1) + '. ' + data[i].Task+ '\n';
		}
		return hasilList;
	}


}

module.exports = Model
