let router = require('./controller')
let command = process.argv
let input = command.slice(2)
function response(input){
	if(input[0] == 'help'){
		router.help()
	}
	else if(input[0] == 'list'){
		router.list()
	}
	else if(input[0] == 'add'){
		router.add(input)
	}
	else if(input[0] == 'delete'){
		router.delete(input)
	}
	else if(input[0] == 'complete'){
		router.complete(input)
	}
	else if(input[0] == 'uncomplete'){
		router.uncomplete(input)
	}
	else if(input[0] == 'find'){
		router.find(input)
	}
}
response(input)


