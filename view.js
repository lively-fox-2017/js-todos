class View {
  help(){
    console.log('node todo.js');
    console.log('node todo.js help');
    console.log('node todo.js list');
    console.log('node todo.js add <task_content>');
    console.log('node todo.js delete <task_id>');
    console.log('node todo.js complete <task_id>');
    console.log('node todo.js uncomplete <task_id>');
    console.log('node todo.js list:created <asc><asc>');
    console.log('node todo.js list:complete <task_id>');
    console.log('node todo.js list:uncomplete <task_id>');
    console.log('node todo.js tags <task_id> <tag1>,<tag2>');
    console.log('node todo.js filter:<tag1>,<tag2>');
  }
  error(urut){
    if (urut=1) {
      console.log('comand not found! use node todo.js help to show help');
    } else {
      console.log('error tidak dapat ditangani!');
    }
  }
  data(data){
    // console.log(data);
    if (data.length==0) {
      console.log('No data to showed!');
    } else {
      for (var i = 0; i < data.length; i++) {
        console.log(`${i+1}. [${data[i].status}] ${data[i].task}, tags:[${data[i].tags}], date_crated:${data[i].date_crated}`);
      }
    }
  }
}
module.exports = new View();
