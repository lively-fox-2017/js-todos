
class View {

	static help(){
		console.log('=======# will call help #=======')
		console.log('1. help')
		console.log('2. list')
		console.log('3. add <task_content>')
		console.log('4. task <task_id>')
		console.log('5. delete <task_id>')
		console.log('6. complete <task_id>')
		console.log('7. uncomplete <task_id>')
	}

	static viewList(listTampil){
		console.log(listTampil);
	}

}

//export
module.exports = View;

