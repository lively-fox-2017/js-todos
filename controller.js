"use strict"
let Model = require('./model');
let View = require('./view')


class Controller {
    constructor() {

    }
    static pilihan(input) {
        switch (input[0]) {
            case 'help':
                View.viewMenu()
                break;
            case 'list':
                let data = Model.list()
                View.viewList(data)
                break;
            case 'add':
                let addData = input.slice(1).join(" ");
                Model.add(addData);
                View.viewAddList();
                break;
            case 'task':
                let findData = Model.find(input.slice(1).join(""));
                View.viewFind(findData);
                break;
            case 'delete':
                let deleteData = Model.delete(input.slice(1).join(""));
                View.viewDelete(deleteData);
                break;
            case 'complete':
                let dataComplete = Model.complition(input.slice(1).join(""));
                View.viewComplete(dataComplete);
                break;
            case 'uncomplete':
                let dataUncomplete = Model.uncomplition(input.slice(1).join(""));
                View.viewUncomplete(dataUncomplete);
                break;

        }
    }
}


module.exports = Controller
