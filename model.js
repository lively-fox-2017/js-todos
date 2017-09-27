const fs=require('fs');
const path='data.json'
class Model {
  readData(cb){
    fs.readFile(path, 'utf8', (err, data) => {
      if (!err) {
        let arr=JSON.parse(data);
        cb(err,arr);
      } else {
        throw err;
      }
    })
  }
  addData(dataInput,cb){
    this.readData((err,data)=>{
      if (!err) {
        // let newData=JSON.parse(data);
        let newData=data;
        newData.push(dataInput);
        // console.log(newData);
        fs.writeFile(path, JSON.stringify(newData), (err) => {
          if (err) throw err;
          // console.log('The file has been saved!');
          cb(err,`TODO List "${dataInput.task}" has added.."`)
        });
      } else {
        throw err;
      }
    });
  }
  findData(index,cb){
    this.readData((err,data)=>{
      let finded=data[index-1];
      // console.log(finded);
      if (finded==undefined) {
        finded=[];
      } else {
        finded=[finded]
      }
      // console.log(finded);
      cb(err,finded);
    })
  }
  deleteData(index,cb){
    this.readData((err,data)=>{
      if (!err) {
        let newData=data;
        let deletedData=newData[index-1];
        newData.splice(index-1,1);
        // console.log(newData);
        fs.writeFile(path, JSON.stringify(newData), (err) => {
          if (err) throw err;
          // console.log('The file has been saved!');
          cb(err,`Deleted "${deletedData.task}" from yout TODO List.."`)
        });
      } else {
        throw err;
      }
    });
  }
  setComplete(index,cb){
    this.readData((err,data)=>{
      if (!err) {
        // let newData=JSON.parse(data);
        let i=0;
        let newData=data.map(temp=>{
          i++;
          // console.log(i);
          if (i==index) {
            // console.log(temp.task);
            let y={"status":"x","task":temp.task};
            return y;
          } else {
            return temp;
          }

        });
        // console.log(newData);
        fs.writeFile(path, JSON.stringify(newData), (err) => {
          if (err) throw err;
          // console.log('The file has been saved!');
          cb(err,`TODO List "${newData[index-1].task}" set to complate"`)
        });
      } else {
        throw err;
      }
    });
  }
  setUnComplete(index,cb){
    this.readData((err,data)=>{
      if (!err) {
        // let newData=JSON.parse(data);
        let i=0;
        let newData=data.map(temp=>{
          i++;
          // console.log(i);
          if (i==index) {
            // console.log(temp.task);
            let y={"status":" ","task":temp.task};
            return y;
          } else {
            return temp;
          }

        });
        // console.log(newData);
        fs.writeFile(path, JSON.stringify(newData), (err) => {
          if (err) throw err;
          // console.log('The file has been saved!');
          cb(err,`TODO List "${newData[index-1].task}" has set to uncomplete"`)
        });
      } else {
        throw err;
      }
    });
  }
  viewDataByCreated(param,cb){
    // console.log(param);
    fs.readFile(path, 'utf8', (err, data) => {
      if (!err) {
        let arr=JSON.parse(data);
        if (param.toLowerCase()=='asc') {
          arr.sort(function(a, b){
            return new Date(a.date_crated) - new Date(b.date_crated);
          })
        } else {
          arr.sort(function(a, b){
            return new Date(b.date_crated) - new Date(a.date_crated);
          })
        }
        // console.log(newArr);
        cb(err,arr);
      } else {
        throw err;
      }
    })
  }
  readDataByStatus(param,cb){
    // console.log(param);
    fs.readFile(path, 'utf8', (err, data) => {
      if (!err) {
        let arr=JSON.parse(data);
        let newArr=arr.filter(task=>{
          return task.status==param.toLowerCase()
        })
        // console.log(newArr);
        cb(err,newArr);
      } else {
        throw err;
      }
    })
  }
  addTags(index,dataTags,cb){
    // console.log(data);
    this.readData((err,data)=>{
      if (!err) {
        // let newData=JSON.parse(data);
        let i=0;
        let newData=data.map(temp=>{
            i++;
            if (i==index) {
              // console.log('----------',dataTags);
              let y={"status":temp.status,"task":temp.task,"tags":dataTags,"date_crated":temp.date_crated};
              return y;
            } else {
              return temp;
            }

          });
        // console.log(newData);
        fs.writeFile(path, JSON.stringify(newData), (err) => {
          if (err) throw err;
          // console.log('The file has been saved!');
          cb(err,`Taged task "${newData[index-1].task}" with tags : dataTags"`)
        });
      } else {
        throw err;
      }
    });
  }
  filterByTags(params,cb){
    // console.log(params);
    fs.readFile(path, 'utf8', (err, data) => {
      if (!err) {
        let arr=JSON.parse(data);
        let newArr=arr.filter(row=>{
          // return row.tags.indexOf(param)>-1
          // console.log(row);
          for (var i = 0; i < params.length; i++) {
            // console.log(params[i]);
            // console.log('-------------cek di tags ',row.tags.indexOf(params[i]));
            if (row.tags.indexOf(params[i])>-1){
              return row;
            }
          }
        })
        // console.log(newArr);
        cb(err,newArr);
      } else {
        throw err;
      }
    })
  }
}

module.exports=new Model();
