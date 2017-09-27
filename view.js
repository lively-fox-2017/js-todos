class View {
	static help(){
		console.log("node index.js help")
		console.log("node index.js list")
		console.log("node index.js add <task_content>")
		console.log("node index.js delete <task_id>")
		console.log("node index.js complete <task_id>")
		console.log("node index.js uncomplete <task_id>")
	}
	static list(obj){
		let status = ''
		obj.forEach(i => {
			if(i.status){
				status = '[X]'
			}
			else{
				status = '[ ]'
			}
			console.log(i.id+'. '+status+' '+i.task)
		})
	}
	static add(res){
		console.log(res)
	}
	static delete(res){
		console.log(res)
	}
}

module.exports = View