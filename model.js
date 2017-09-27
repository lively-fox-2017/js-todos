var fs = require('fs')
class Model {
  
  static addTodoList(isiTask){
    
    let data = Model.showTodoList();
    // console.log("=====", data)
    data.push( {
      "id":  data[data.length-1].id+1,
      "task": isiTask,
      "complete": false
    })
    fs.writeFileSync('data.json', JSON.stringify(data))
    return data
      
  }
  static findId (id){
    let data = Model.showTodoList();
    for(var i = 0; i < data.length; i++){
      if(data[i].id == id){
        return data[i];
      }
    }
    return "data tidak ditemukan"
  }

  static delList (id){
    let data = Model.showTodoList();
    let arrTemp = []
    for(var i = 0; i < data.length; i++){
      
      if(data[i].id != id){
         arrTemp.push(data[i])
      }
    }
    fs.writeFileSync('data.json', JSON.stringify(arrTemp))
    return arrTemp
  }


  static comList (id){
    let data = Model.showTodoList();
    for(var i = 0; i < data.length; i++){
      if(data[i].id == id){
        var brubah = data[i].complete = true;
       }
    }
    
    fs.writeFileSync('data.json', JSON.stringify(data))
    return data
  }


  static uncomList (id){
    let data = Model.showTodoList();
    for(var i = 0; i < data.length; i++){
      if(data[i].id == id){
        var brubah = data[i].complete = false;
       }
    }
    
    fs.writeFileSync('data.json', JSON.stringify(data))
    return data
  }

  static showTodoList() {
    //nanti baca file , trus misalnya udah dapet hasilnya berupa var result
    var dataJson = fs.readFileSync('data.json', 'utf8');
    
    return JSON.parse(dataJson)

  }

}

module.exports = Model