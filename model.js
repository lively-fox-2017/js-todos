"use strict"

var fs = require('fs');

class toDo {
  constructor(argData = {}) {
    this.task = argData['task'];
  }
}

class Model {
  constructor(){

  }

  getAllData() {
    let listToDo = fs.readFileSync('taskToDos.json');
    return JSON.parse(listToDo);
  }


  listToDoing(){
    // let arrTask = [];
    let list = JSON.parse(fs.readFileSync('taskToDos.json', 'utf-8'));
    // return listToDoing()
    // console.log(list[0].task);
    for(let i = 1; i < list.length; i++){
      // arrTask.push(list[i].task)
      console.log(''+i+ '. ' +list[i].task);
      // arrTask.push(temp)
    }
    // return arrTask
  }

  addData(task){
    let newData = this.getAllData();
    newData.push(new toDo({
      'task' : task
    }))
    return newData;
  }

  writeData(task) {
    let save = this.addData(task);
    fs.writeFile('taskToDos.json', JSON.stringify(save), 'utf-8', (err) => {
      if(err){
        console.log('Error to save');
      } else {
        console.log('success');
      }
    })
  }

}

var model = new Model();
// console.log(model.listToDoing());

module.exports = model
