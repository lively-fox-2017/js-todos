class View {
    static viewList() {
        return function test(arrayOfObjects) {
            // console.log(data)
            for(var i = 0; i < arrayOfObjects.task.length; i++) {
            console.log(`${i+1} ${arrayOfObjects.task[i].status} ${arrayOfObjects.task[i].name}`)
            }
        }
    }

    static viewHelp(input) {
        for(var i = 0; i < input.length; i++) {
            console.log(input[i])
        }
    }

    static viewFind() {
        return function view(input, arrayOfObjects) {
            console.log(`${input} ${arrayOfObjects.task[input-1].status} ${arrayOfObjects.task[input-1].name}`)
        }
    }

    static viewFilter() {
        return function viewFilter(input, arrayOfObjects) {
            for(var i = 0; i < arrayOfObjects.task.length; i++) {
                if(arrayOfObjects.task[i].tag.indexOf(input) !== -1) {
                    console.log(`${i+1} ${arrayOfObjects.task[i].status} ${arrayOfObjects.task[i].name}, Tags: ${arrayOfObjects.task[i].tag}`)
                }
            }
        }
    }
}

module.exports = View