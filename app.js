'use strict'
var fs = require('fs')
class toDo {
    static actions (action) {
        var input = action.slice(1,action.length).join(' ')
        if(action[0] === "add") {
            var obj = {
                status: "[ ]",
                name: input,
                date: new Date(),
                tag:[]
            }
            this.add(obj)
        } else if(action[0] === "list") {
            this.list()
        } else if(action[0] === "delete") {
            this.delete(input)
        } else if(action[0] === "find") {
            this.find(input)
        } else if(action[0] === "complete") {
            this.complete(input)
        }  else if(action[0] === "uncomplete") {
            this.uncomplete(input)
        }  else if(action[0] === "list:created") {
            this.listcreated()
        }  else if(action[0] === "tag") {
            this.tag(input)
        }  else if(action[0] === "help") {
            this.help()
        }  else if(action[0] === "filter") {
            this.filter(input)
        }  else {
            console.log("Command not recognized")
        } 
    
    }
    static help() {
        console.log("list")
        console.log("add <task_content>")
        console.log("task <task_id>")
        console.log("delete <task_id>")
        console.log("complete <task_id>")
        console.log("uncomplete <task_id>")
        console.log("help")
    }
    static add (input) {
        fs.readFile('./list.json', 'utf-8', function(err, data) {
            if (err) throw err
        
            var arrayOfObjects = JSON.parse(data)
            arrayOfObjects.task.push(input)

        
            
            fs.writeFile('./list.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
                if (err) throw err
                console.log('Done!')
            })
        
        })
    }

    static list () {
        fs.readFile('./list.json', 'utf-8', function(err, data) {
            if (err) throw err
        
            var arrayOfObjects = JSON.parse(data)
            
            for(var i = 0; i < arrayOfObjects.task.length; i++) {
                console.log(`${i+1} ${arrayOfObjects.task[i].status} ${arrayOfObjects.task[i].name}`)
            }
        })
    }

    static add (input) {
        fs.readFile('./list.json', 'utf-8', function(err, data) {
            if (err) throw err
        
            var arrayOfObjects = JSON.parse(data)
            arrayOfObjects.task.push(input)
  
        
            
            fs.writeFile('./list.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
                if (err) throw err
                console.log('Done!')
            })
        
        })
    }

    static delete(input) {
        fs.readFile('./list.json', 'utf-8', function(err, data) {
            if (err) throw err
        
            var arrayOfObjects = JSON.parse(data)
            arrayOfObjects.task.splice(input-1,1)
            
            fs.writeFile('./list.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
                if (err) throw err
                console.log('Done!')
            })
        
        })
    }

    static find(input) {
        fs.readFile('./list.json', 'utf-8', function(err, data) {
            if (err) throw err
        
            var arrayOfObjects = JSON.parse(data)
            console.log(`${input} ${arrayOfObjects.task[input-1].status} ${arrayOfObjects.task[input-1].name}`)
        })
    }

    static complete(input) {
        fs.readFile('./list.json', 'utf-8', function(err, data) {
            if (err) throw err
        
            var arrayOfObjects = JSON.parse(data)
            arrayOfObjects.task[input-1].status = "[x]"

        
            
            fs.writeFile('./list.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
                if (err) throw err
                console.log('Done!')
            })
        
        })
    }

    static uncomplete(input) {
        fs.readFile('./list.json', 'utf-8', function(err, data) {
            if (err) throw err
        
            var arrayOfObjects = JSON.parse(data)
            arrayOfObjects.task[input-1].status = "[ ]"

        
            
            fs.writeFile('./list.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
                if (err) throw err
                console.log('Done!')
            })
        
        })
    }

    static listcreated () {
        fs.readFile('./list.json', 'utf-8', function(err, data) {
            if (err) throw err
        
            var arrayOfObjects = JSON.parse(data)
            arrayOfObjects.task.sort(function(a, b){
                var dateA=a.date, dateB=b.date
                return dateA-dateB 
            })
            for(var i = 0; i < arrayOfObjects.task.length; i++) {
                console.log(`${i+1} ${arrayOfObjects.task[i].status} ${arrayOfObjects.task[i].name}`)
            }
        })
    }

    static tag(input) {
        fs.readFile('./list.json', 'utf-8', function(err, data) {
            if (err) throw err
            var tags = input.split(' ').slice(1)
            var arrayOfObjects = JSON.parse(data)
            arrayOfObjects.task[input[0]-1].tag = tags

        
            
            fs.writeFile('./list.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
                if (err) throw err
                console.log('Done!')
            })
        
        })
    }

    static filter(input) {
        fs.readFile('./list.json', 'utf-8', function(err, data) {
            if (err) throw err
        
            var arrayOfObjects = JSON.parse(data)
            for(var i = 0; i < arrayOfObjects.task.length; i++) {
                if(arrayOfObjects.task[i].tag.indexOf(input) !== -1) {
                    console.log(`${i+1} ${arrayOfObjects.task[i].status} ${arrayOfObjects.task[i].name}, Tags: ${arrayOfObjects.task[i].tag}`)
                }
            }
        })
    }

}


let arr = process.argv
let values = arr.slice(2)

let app = toDo.actions(values)

