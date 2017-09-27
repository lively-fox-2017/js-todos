const model=require('./model');
const view=require('./view');
// const argv=process.argv;
// const command=argv.splice(2,argv.length);
// console.log('asss');
class Controller {
  viewHelp(){
    return view.help();
  }
  viewError(){
    return view.error();
  }
  viewData(){
    model.readData((err,data)=>{
      if (!err) {
        return view.data(data);
      } else {
        throw err;
      }
    });
  }
  addData(data){
    let dataObj={"status":" ","task":data}
    model.addData(dataObj,(err,info)=>{
      if (!err) {
        console.log(info);
      } else {
        throw err;
      }
    })
  }
  findData(index){
    model.findData(index,(err,data)=>{
      if (!err) {
        return view.data(data);
      } else {
        throw err;
      }
    })
  }
  deleteData(index){
    model.deleteData(index,(err,info)=>{
      if (!err) {
        console.log(info);
      } else {
        throw err;
      }
    })
  }
  setComplete(index){
    model.setComplete(index,(err,info)=>{
      if (!err) {
        console.log(info);
      } else {
        throw err;
      }
    })
  }
  setUnComplete(index){
    model.setUnComplete(index,(err,info)=>{
      if (!err) {
        console.log(info);
      } else {
        throw err;
      }
    })
  }
  viewDataComplete(param){
    model.readDataByStatus(param,(err,data)=>{
      if (!err) {
        return view.data(data);
      } else {
        throw err;
      }
    });
  }
  addTags(index,data){
    // let dataObj={"status":" ","task":data}
    model.addTags(index,data.split(','),(err,info)=>{
      if (!err) {
        console.log(info);
      } else {
        throw err;
      }
    })
  }
  filterByTags(param){
    // let dataObj={"status":" ","task":data}
    model.filterByTags(param.split(','),(err,data)=>{
      if (!err) {
        return view.data(data);
      } else {
        throw err;
      }
    })
  }
}

module.exports = new Controller();
