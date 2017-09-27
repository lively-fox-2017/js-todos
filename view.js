'use strict'

class View {

  static helpView(){
    console.log('$ node todo.js help');
  }

  static commandView(){
    let helpList=['help' , 'list' , 'add <task_content>' , 'task <task_id>' , 'delete <task_id>' , 'complete <task_id>' , 'uncomplete <task_id>']
    for (let i=0 ; i< helpList.length ; i++){
      console.log('$ node todo.js',helpList[i]);
    }
  }

  static listView(list){
    for (let i=0; i< list.length ; i++){
      let stsID =  (list[i].completed) ? '[X]':'[ ]'
      let tag = list[i].tag.join(',')
      console.log(`${list[i].id}. ${stsID}${list[i].todo} tag:${tag}`);
    }
  }

  static emptyAdd(){
    console.log('Please insert task content');
  }

  static completedAdd(todo){
    console.log(`Added "${todo}" to your TODO list...`);
  }

  static emptyTaskId(){
    console.log('Please input Task ID');
  }

  static showTaskID(task){
    console.log(task);
  }

  static deletedTaskID(todo){
    console.log(`Deleted "${todo}" from your TODO list...`);
  }

  static updateCompleteTaskID(todo){
    console.log(`Status "${todo}" updated`);
  }

  static todoIDNotFound(){
    console.log('ID not found');
  }

  static tagID(tampil){
    console.log(tampil);
  }

  static filterTag(data){
    this.listView(data)
  }

}

module.exports = View;
