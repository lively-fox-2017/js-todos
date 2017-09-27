let fs = require('fs');
class Model {
  constructor(taskList){
    this.taskList = taskList
  }
  static getJson(){
    let taskArr = [];
    let taskListJson = fs.readFileSync('data.json','utf8');
    this.taskList = JSON.parse(taskListJson);
    for(var i = 0; i < this.taskList.length; i ++){
      taskArr.push(`${i+1}. ${this.taskList[i].task}`)
    }
    return taskArr.join('\n');
  }
  static addTask(argv){
    let newTask = {'task':argv}
    this.taskList.push(newTask);
    fs.writeFileSync('data.json',JSON.stringify(this.taskList));
    return `${argv} has added successfully`
  }
  static findTaskId(argv){
    return `${parseInt(argv)}. ${this.taskList[parseInt(argv)-1].task}`
  }
  static deleteTaskId(argv){
    
  }
}

module.exports = Model
