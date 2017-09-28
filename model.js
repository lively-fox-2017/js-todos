"use strict"

let fs = require('fs');
let data = JSON.parse(fs.readFileSync('data.json'));
class Model {
    constructor() {

    }

    static list() {
        return data
    }
    static add(dataAdd) {
        let date = new Date();
        let objAdd = {
            "id": data.length + 1,
            "task": dataAdd,
            "complete": false,
            "created_at": date.toISOString()
        }
        data.push(objAdd);
        let saveData = fs.writeFileSync("data.json", JSON.stringify(data))
        return saveData;
    }
    static find(dataFind) {
        let dataIndex = dataFind - 1
        return data[dataIndex];
    }
    static delete(dataDelete) {
        let dataList = data[dataDelete - 1];
        let hasil = data.splice(0, dataDelete - 1)
        let saveData = fs.writeFileSync("data.json", JSON.stringify(hasil))
        if (dataList) {
            return dataList;
        } else {
            return false;
        }
    }
    static complition(dataComplete) {
        let indexComplete = dataComplete - 1
        data[indexComplete].complete = '[x]'
        let saveData = fs.writeFileSync("data.json", JSON.stringify(data))
        return data[indexComplete]
    }
    static uncomplition(dataUncomplete) {
        let indexUncomplete = dataUncomplete - 1
        data[indexUncomplete].complete = '[ ]'
        let saveData = fs.writeFileSync("data.json", JSON.stringify(data))
        return data[indexUncomplete]
    }


}


module.exports = Model
