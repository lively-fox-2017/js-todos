"use strict"

class View {
    constructor() {

    }
    static viewMenu() {
        console.log('1. node index.js ')
        console.log('2. node index.js help')
        console.log('3. node index.js list')
        console.log('4. node index.js add <task_content>')
        console.log('5. node index.js task <task_id>')
        console.log('6. node index.js delete <task_id>')
        console.log('7. node index.js complete  <task_id>')
        console.log('8. node index.js uncomplete  <task_id>')
    }
    static viewList(data) {
        for (let i = 0; i < data.length; i++) {
            console.log(`${data[i].id}.` + `${data[i].complete} `+`${data[i].task}`);
        }

    }
    static viewAddList(data) {
        console.log('Data saved!')
    }
    static viewFind(indexData) {
        if (indexData) {
            console.log(indexData.task);
        } else {
            console.log("Data tidak ditemukan!")
        }

    }
    static viewDelete(deleteData) {
        if (deleteData == false) {
            console.log('No data found!');
        } else {
            console.log("Deleted data " + `${deleteData.task}` + ' from your TODO List');

        }

    }
    static viewComplete(data) {
        console.log(data.task + ' completed')
        console.log(`${data.id}.` + `${data.complete} ` + `${data.task}`);
    }
    static viewUncomplete(data) {
        console.log(data.task + ' uncompleted')
        console.log(`${data.id}.` + `${data.complete} ` + `${data.task}`);
    }



}

module.exports = View;

