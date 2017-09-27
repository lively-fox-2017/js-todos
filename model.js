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
    data.push({id:data.length+1,nama:dataInputan,done:' ' ,created:new Date(), finished:''});
    this._writeToData(data);
  }

  addTagToTask(id, tags){
    let res = {status:false};
    if(id-1<this.list.length){
      if(!this.list.hasOwnProperty('tags')){
        this.list[id-1].tags = [];
        //console.log('ullul');
      }
      res.status = true;
      tags.map((item) => {this.list[id-1].tags.push(item)})
      res.data = this.list[id-1];
      //console.log(this.list);
      this._writeToData(this.list)
      return res;
    }
    return res;
  }

  getTaskWithTag(tag){
    let res = {status:false};
    let data = this.getAllList();
    for (let i in data) {
      //console.log(data[i]);
      if (data[i].hasOwnProperty('tags')) {
        if(data[i].tags.indexOf(tag)!=-1){
          if(!res.hasOwnProperty('data')){
            res.status = true;
            res.data = [data[i]]
          }else{
            res.data.push(data[i]);
          }
        }
      }
    }
    //console.log(res);
    return res;
  }

  getTaskById(id){
    return this.list[id-1];
  }

  getAllTaskOrderedByDate(option){
    //console.log(option);
    function dateMin(a,b){
      return new Date(a.created).getTime() - new Date(b.created).getTime()
    }
    let list = this.getAllList();
    if(option=='desc'){
      list.sort(function sortDateDesc(b,a){
        return dateMin(a,b)
      });

    }
    if(option=='asc'){
      list.sort(function sortDateDesc(b,a){
        return dateMin(b,a)
      });
    }
    return list
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
      this.list[index].finished= new Date();
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
      this.list[index].finished = '';
      this._writeToData(this.list);
      status = true;
    }
    return status;
  }

  getAllTaskCompletedOrderedByDate(opt){
    let data = this.getAllTaskOrderedByDate();
    let completedOnly = data.filter((item) => {if(item.done=='X'){return item}});
    function dateMin(a,b){
      return new Date(a.finished).getTime() - new Date(b.finished).getTime()
    }

    completedOnly.sort((a,b) => dateMin(b,a));
    if(opt == 'asc'){
      completedOnly.sort((a,b) => dateMin(a,b));
    }
    return completedOnly;
  }

}

module.exports = Model;
