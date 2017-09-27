let fs = require('fs')
// let data = fs.readFileSync('data.json','utf-8')
// let json = JSON.parse(data)
class Model {
	static list(cb) {
		fs.readFile('data.json','utf-8', (err,res)=>{
			if(!err){
				let data = JSON.parse(res)
				cb(data)
			}
		})
	}
	static add(input,cb) {
		Model.list(res => {
			let temp = []
			let obj = {}
			res.forEach(i => {
				temp.push(i)
			})
			obj['id'] = res.length + 1
			obj['task'] =  input.slice(1).join(' ')
			obj['status'] = false
			obj['created_at'] = new Date()
			temp.push(obj)
			let str = JSON.stringify(temp)
			fs.writeFileSync('data.json', str)
			cb(`Add ${obj.task} in your TODO list...`)
		})
	}
	static delete(input,cb) {
		Model.list(res=>{
			let id = input.slice(1).join(' ')
			let temp = []
			let count = 1
			let task = ''
			res.forEach(i => {
				if(i.id != id){
					let obj = {}
					obj['id'] = count
					obj['task'] = i.task
					obj['status'] = i.status
					obj['created_at'] = i.created_at
					temp.push(obj)
					count ++
				}else{
					task = i.task
				}			
			})
			let str = JSON.stringify(temp)
			fs.writeFileSync('data.json', str)
			cb(`Deleted ${task} from your TODO list...`)
		})
	}
	static complete(input){
		Model.list(json => {
			let id = input.slice(1).join(' ')
			let temp = []
			json.forEach(i => {
				if(i.id == id){
					let obj = {}
					obj['id'] = i.id
					obj['task'] = i.task
					obj['status'] = true
					obj['created_at'] = i.created_at
					temp.push(obj)
				}else{
					temp.push(i)
				}			
			})
			let str = JSON.stringify(temp)
			fs.writeFileSync('data.json', str)
		})
	}
	static uncomplete(input){
		Model.list(json => {
			let id = input.slice(1).join(' ')
			let temp = []
			json.forEach(i => {
				if(i.id == id){
					let obj = {}
					obj['id'] = i.id
					obj['task'] = i.task
					obj['status'] = false
					obj['created_at'] = i.created_at
					temp.push(obj)
				}else{
					temp.push(i)
				}			
			})
			let str = JSON.stringify(temp)
			fs.writeFileSync('data.json', str)
		})
	}
	static find(input,cb) {
		Model.list(json => {
			
		})
	}
}

module.exports = Model