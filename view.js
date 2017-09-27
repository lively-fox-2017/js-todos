class View {
	constructor(){

	}

	tampilData(data){
		for(let i=0; i<data.length; i++){
			console.log(data[i])
		}
	}

	addList(data){
		console.log('added "'+data+'" to your TODO list...')
	}

	findList(data){
		console.log(data)
	}

	deleteList(data){
		console.log('Deleted "'+data+'" from your TODO list...')
	}

}

module.exports = View