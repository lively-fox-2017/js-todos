//proses input
let Controller=require('./controller')
let command=process.argv.slice(2)
//baca dari urutan 2
// console.log(command);
let controller=new Controller()

controller.menu(command)
