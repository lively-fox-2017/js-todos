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
                // let deleteData = Model.delete(input.slice(1).join(""));
                let dataComplete = Model.complition();
                View.viewComplete(dataComplete);
                break;

        }
    }
}


module.exports = Controller
