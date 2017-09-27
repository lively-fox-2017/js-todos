let Controller = require('./controller');
let intro = process.argv;
// console.log(intro.length);
let tugas = intro[2];
if (tugas === 'help') {
  Controller.ambilData();
} else if (tugas === 'list') {
  Controller.getList();
} else if (tugas === 'add') {
  let task = intro[3];
  Controller.addTodo(task);
} else if(tugas==='task'){
  let find = intro[3];
  Controller.findTodo(find);
} else if(tugas==='delete'){
  let hapus = intro[3];
  Controller.hapusTodo(hapus);
} else if(tugas==='complete'){
  let done = intro[3];
  Controller.doneTodo(done);
} else if(tugas==='uncomplete'){
  let undone = intro[3];
  Controller.undoneTodo(undone);
}

// [
//   {"task": "Bikin aplikasi"},
//   {"task": "Main Node.js"},
//   {"task": "Minum Es Teh"}
// ]