var models = require('./model.js')
var view = require('./view.js')
'use strict'
class Controller {
    static actions (action) {
        var input = action.slice(1,action.length).join(' ')
        if(action[0] === "add") {
            var obj = {
                status: "[ ]",
                name: input,
                date: new Date(),
                tag:[]
            }
            // this.add(obj)
            models.add(obj)
        } else if(action[0] === "list") {
            models.list(view.viewList())
            // models.list()
        } else if(action[0] === "delete") {
            models.delete(input)
        } else if(action[0] === "find") {
            models.find(input, view.viewFind())
        } else if(action[0] === "complete") {
            models.complete(input)
        }  else if(action[0] === "uncomplete") {
            models.uncomplete(input)
        }  else if(action[0] === "list:created") {
            models.listcreated(view.viewList())
        }  else if(action[0] === "tag") {
            models.tag(input)
        }  else if(action[0] === "help") {
            view.viewHelp(models.help())
            // models.help()
        }  else if(action[0] === "filter") {
            models.filter(input, view.viewFilter())
        }  else {
            console.log("Command not recognized")
        } 
    
    }

}
// models.Halo()
// let arr = process.argv
// let values = arr.slice(2)
// let app = Controller.actions(values)
module.exports = Controller
