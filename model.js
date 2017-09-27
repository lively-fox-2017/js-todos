'use strict'
const fs = require('fs');
class Model {
  constructor(){
    this.filePath = 'data.json';
    this.list=JSON.parse(fs.readFileSync(this.filePath, 'utf8'));
    //console.log(this.list);
    //this.list=[];
    //this._readFileAndAssign('data.json')
  }

  _writeToData(data){
    fs.writeFileSync(this.filePath, JSON.stringify(data));
  }

  _readFileAndAssign(){
    fs.readFile(this.filePath, 'utf8', function(err, data){
      if(!err){
        //console.log(data);
        this.list = JSON.parse(data);
        //console.log(data);
      }
    }.bind(this))
  }

  getAllList(){
    return this.list;
  }

  addToList(dataInputan){
    let data = this.list;
    data.push({id:data.length+1,nama:dataInputan})
    this._writeToData(data);
  }

  getTaskById(id){
    return this.list[id-1];
  }

  deleteById(id){
    let res = {status:false};
    let index = id-1;
    if(index<this.list.length){
      //hapus data di index
      let newData = this.list.filter((item) => {
        if(item.id!=id){
          if(item.id>id){
            item.id= item.id-1;
          }
          return item;
        }else{
          res.deleted = item;
        }
      });
      this.list = newData;
      this._writeToData(newData);
      //majuin id setelahnya
      res.status=true;
    }
    return res;
  }

  markAsComplete(id){
    let status= false;
    let index = id-1;
    if(index<this.list.length){
      this.list[index].done='X';
      this._writeToData(this.list);
      status = true;
    }
    return status;
  }

  markAsUncomplete(id){
    let status= false;
    let index = id-1;
    if(index<this.list.length){
      this.list[index].done=' ';
      this._writeToData(this.list);
      status = true;
    }
    return status;
  }

}

module.exports = Model;
