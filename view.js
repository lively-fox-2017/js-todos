'use strict'
class View {
  help(data){
    let output = '$$============================================$$\n\n';
    output += '$ node todo.js help\n'+
              '$ node todo.js list\n'+
              '$ node todo.js add <task_content>\n'+
              '$ node todo.js task <task_id>\n'+
              '$ node todo.js delete <task_id>\n'+
              '$ node todo.js complete <task_id>\n'+
              '$ node todo.js uncomplete <task_id>\n';
    console.log(output);
  }

  list(data){
    for(let i =0; i< data.length; i++){
      console.log(`${data[i].id} [${data[i].done}] ${data[i].nama}`);
    }
  }

  addToList(data){
    console.log(`\'${data}\' added to ToDoList`);
  }

  viewTask(objek){
    console.log(`${objek.id} [${objek.done}] ${objek.nama}`);
  }

  deleteById(data){
    if(data.status){
      console.log(`\'${data.deleted.nama}\' berhasil dihapus`);
    }else{
      console.log('data tidak ditemukan');
    }
  }

  markAsComplete(status, list){
    if(status){
      console.log('Mark as complete berhasil');
    }else{
      console.log('ID tidak ditemukan');
    }
    this.list(list);
  }

  markAsUncomplete(status, list){
    if(status){
      console.log('Mark as not completed berhasil');
    }else{
      console.log('ID tidak ditemukan');
    }
    this.list(list);
  }
}

module.exports = View;
