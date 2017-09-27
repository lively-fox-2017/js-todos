'use strict'
const view = require('./view');
const model = require('./model');

class Controller {
  constructor(){
    this.views = new view();
    this.models = new model();
  }

  static handler(command){
    let route = new Controller();
    if(command.length==0 || command[0]=='help'){
      route.help();
    }else if(command[0] == 'list'){
      route.list();
    }else if(command[0] == 'add'){
      route.add(command[1]);
    }else if(command[0] == 'find'){
      route.find(command[1]);
    }else if(command[0] == 'delete'){
      route.delete(command[1]);
    }else if(command[0] == 'complete'){
      route.markAsComplete(command[1]);
    }else if(command[0] == 'uncomplete'){
      route.markAsUncomplete(command[1]);
    }else if(command[0].slice(0,4)=='list' && command[0].slice(4,command[0].length) == ':outstanding'){
      route.allListByDate(command[1] || '');
    }else if(command[0].slice(0,4)=='list' && command[0].slice(4,command[0].length) == ':completed'){
      route.allCompletedListByDate(command[1] || '');
    }else if(command[0]=='tag'){
      route.addTagToTask(command[1], command.slice(2, command.length));
    }else if(command[0].slice(0,6)=='filter'){
      route.filterByTag(command[0].slice(7,command[0].length));
    }
  }

  list(){
    let data = this.models.getAllList();
    this.views.list(data);
  }

  help(){
    this.views.help();
  }

  add(dataInputan){
    //console.log(dataInputan);
    this.models.addToList(dataInputan);
    this.views.addToList(dataInputan);
  }

  find(id){
    let data = this.models.getTaskById(id);
    this.views.viewTask(data);
  }

  delete(id){
    let status = this.models.deleteById(id);
    this.views.deleteById(status);
  }

  markAsComplete(id){
    let data = this.models.markAsComplete(id);
    //console.log(data);
    this.views.markAsComplete(data, this.models.getAllList());
  }

  markAsUncomplete(id){
    let status = this.models.markAsUncomplete(id);
    this.views.markAsUncomplete(status, this.models.getAllList());
  }

  allListByDate(opt){
    let data = this.models.getAllTaskOrderedByDate(opt);
    this.views.list(data)
  }

  allCompletedListByDate(opt){
    let data = this.models.getAllTaskCompletedOrderedByDate(opt);
    this.views.list(data)
  }

  addTagToTask(id, tags){
    let status = this.models.addTagToTask(id, tags);
    this.views.addTagToTask(status);

  }

  filterByTag(tag){
    //console.log(tag);
    let res = this.models.getTaskWithTag(tag);
    this.views.getTaskWithTag(res);
  }
}

module.exports = Controller;
