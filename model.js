var fs = require('fs')
class Model {
    static help() {
        var arr = [
            "list",
            "add <task_content>",
            "task <task_id>",
            "delete <task_id>",
            "complete <task_id>",
            "uncomplete <task_id>",
            "tag <taskid> <tags>",
            "help"
        ]
        return arr
    }
    static add (input) {
        fs.readFile('./data.json', 'utf-8', function(err, data) {
            if (err) throw err
        
            var arrayOfObjects = JSON.parse(data)
            arrayOfObjects.task.push(input)

            fs.writeFile('./data.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
                if (err) throw err
                console.log('Done!')
            })
        
        })
    }

    static list (cb) {
        fs.readFile('./data.json', 'utf-8', function(err, data) {
            if (err) throw err
        
            var arrayOfObjects = JSON.parse(data)

            cb(arrayOfObjects)
        })
    }

    static add (input) {
        fs.readFile('./data.json', 'utf-8', function(err, data) {
            if (err) throw err
        
            var arrayOfObjects = JSON.parse(data)
            arrayOfObjects.task.push(input)
  
            fs.writeFile('./data.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
                if (err) throw err
                console.log('Done!')
            })
        
        })
    }

    static delete(input) {
        fs.readFile('./data.json', 'utf-8', function(err, data) {
            if (err) throw err
        
            var arrayOfObjects = JSON.parse(data)
            arrayOfObjects.task.splice(input-1,1)
            
            fs.writeFile('./data.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
                if (err) throw err
                console.log('Done!')
            })
        
        })
    }

    static find(input, cb) {
        fs.readFile('./data.json', 'utf-8', function(err, data) {
            if (err) throw err
        
            var arrayOfObjects = JSON.parse(data)
            cb(input, arrayOfObjects)
        })
    }

    static complete(input) {
        fs.readFile('./data.json', 'utf-8', function(err, data) {
            if (err) throw err
        
            var arrayOfObjects = JSON.parse(data)
            arrayOfObjects.task[input-1].status = "[x]"

            fs.writeFile('./data.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
                if (err) throw err
                console.log('Done!')
            })
        
        })
    }

    static uncomplete(input) {
        fs.readFile('./data.json', 'utf-8', function(err, data) {
            if (err) throw err
        
            var arrayOfObjects = JSON.parse(data)
            arrayOfObjects.task[input-1].status = "[ ]"

            fs.writeFile('./data.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
                if (err) throw err
                console.log('Done!')
            })
        
        })
    }

    static listcreated (cb) {
        fs.readFile('./data.json', 'utf-8', function(err, data) {
            if (err) throw err
        
            var arrayOfObjects = JSON.parse(data)
            arrayOfObjects.task.sort(function(a, b){
                var dateA=a.date, dateB=b.date
                return dateA-dateB 
            })
            cb(arrayOfObjects)
        })
    }

    static tag(input) {
        fs.readFile('./data.json', 'utf-8', function(err, data) {
            if (err) throw err
            var tags = input.split(' ').slice(1)
            var arrayOfObjects = JSON.parse(data)
            arrayOfObjects.task[input[0]-1].tag = tags

            fs.writeFile('./data.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
                if (err) throw err
                console.log('Done!')
            })
        
        })
    }

    static filter(input, cb) {
        fs.readFile('./data.json', 'utf-8', function(err, data) {
            if (err) throw err
        
            var arrayOfObjects = JSON.parse(data)
            cb(input, arrayOfObjects)
        })
    }

}

module.exports = Model
