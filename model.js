const Controller = require('./controller')

let fs = require('fs')
let data = JSON.parse(fs.readFileSync('data.json'))
// console.log(data)


class Model {
	// constructor(){

	// }

	static list_list(){
		let result='';
		
		for (let i = 0;i<data.length;i++){
			result+= (i+1) + '. ' + data[i].Task+ '\n';
		}
		return result;
	}

	static addAdd(comment){
		data.push({
			Status : "[ ]",
			Task : comment
		})
		
		let save = JSON.stringify(data)

		fs.writeFile('data.json', save,(err, saved)=>{
			if(err){
				console.log('data not save')
			}else{
				console.log(`Added "${comment}" to your TODO List...`)
			}
		})
	}


	static task(id){
		console.log(`${id}. ${data[(id-1)].Task}`) 
	}


	static delete(listDelete){
		let deleteComment = data[listDelete-1].Task

		//console.log(data.splice((listDelete-1),1))
		let forDelete = data.splice((listDelete-1),1)
		let deleted = JSON.stringify(data)
		
		fs.writeFile('data.json', deleted,(err, saved)=>{
				if(err){
					console.log('failed to delete your list')
				}else{
					console.log(`Deleted "${deleteComment}" from your TODO list...`)
				}
			})

		}
		


}

module.exports = Model
