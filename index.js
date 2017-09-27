const argv=process.argv;
const controller=require('./controller');
const command=argv.splice(2,argv.length);

// let controller=new Controller;
// console.log('filter=',command[0].substring(0,7));
if (command.length>3) {
  controller.viewError();
} else
if (command=='' || command[0]=='help') {
  controller.viewHelp();
} else
if (command[0]=='list') {
  controller.viewData();
} else
if (command[0]=='add') {
  controller.addData(command[1]);
} else
if (command[0]=='find') {
  controller.findData(Number(command[1]));
} else
if (command[0]=='delete') {
  controller.deleteData(Number(command[1]));
} else
if (command[0]=='complete') {
  controller.setComplete(Number(command[1]));
} else
if (command[0]=='uncomplete') {
  controller.setUnComplete(Number(command[1]));
} else
if (command[0]=='list:created') {
  // console.log(command[1]);
  controller.viewDataByCreated(command[1]);
} else
if (command[0]=='list:complete') {
  controller.viewDataComplete('x');
} else
if (command[0]=='list:uncomplete') {
  controller.viewDataComplete(' ');
} else
if (command[0]=='tags') {
  controller.addTags(Number(command[1]),command[2]);
} else
if (command[0].substring(0,7)=='filter:') {
  // console.log(command[0].substring(0,7));
  // console.log(command[0].substring(7,command[0].length));
  controller.filterByTags(command[0].substring(7,command[0].length));
} else {
  controller.viewError();
}
