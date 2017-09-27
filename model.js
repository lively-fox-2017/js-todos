let fs = require('fs');
let string = JSON.parse(fs.readFileSync("data.json"))
class Model {
  constructor() {

  }
  static dataList() {
    let output = '';
    let nomor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (var data = 0; data < string.length; data++) {
      output += nomor[data] + '. '+ string[data].status +' ' + string[data].task + '\n';
    }
    return output;
  }

  static addTask(task) {
    //  let addData = JSON.stringify(task);
    string.push({
      status: "[ ]",
      task: task
    });
    //  console.log(string);
    let simpan = JSON.stringify(string);
    fs.writeFile('data.json', simpan, (err, tersimpan) => {
      if (err) {
        console.log('Data tidak tersimpan');
      } else {
        console.log('Added "' + task + '" to your TODO list');
      }
    });
  }
  static findTask(find){
    let output='';
    let ambilString=this.dataList().split('\n');
    // console.log(ambilString[1]);
    for (var cari = 0; cari < string.length; cari++) {
      output = ambilString[find - 1];
    }
    return output;
  }

  static hapusTask(hapus){
    let output=[]
    // console.log(string.length);
    for (var del = 0; del < string.length; del++) {
        if(string[hapus-1]!==string[del]){
          output.push(string[del]);
          // console.log(string);
        }
    }
    // console.log(output);
    let simpan = JSON.stringify(output);
    let stringGet=this.dataList().split('\n');
    // console.log(simpan);
    fs.writeFile('data.json',simpan,(err,tersimpan)=>{
      if(err){
        console.log('Data gagal simpan');
      } else {
        console.log('Deleted '+stringGet[hapus-1]+ ' from your TODO list...');
      }
    });
  }
  static doneTask(done){
    // console.log(string.length);
    for (var don = 0; don < string.length; don++) {
      // console.log(string[done-1]===string[don]);
      if(string[done-1]===string[don]){
        string[don].status = "[x]";
      }
      
    }
    let simpan = JSON.stringify(string);
    fs.writeFile('data.json',simpan,(err,tersimpan)=>{
      if(err){
        console.log('Data gagal simpan');
      } else {
        console.log('Sucess checklist from your TODO list...');
      }
    });
  }
  static undoneTask(undone){
    // console.log(string.length);
    for (var undon = 0; undon < string.length; undon++) {
      // console.log(string[done-1]===string[don]);
      if(string[undone-1]===string[undon]){
        string[undon].status = "[ ]";
      }
      
    }
    let simpan = JSON.stringify(string);
    fs.writeFile('data.json',simpan,(err,tersimpan)=>{
      if(err){
        console.log('Data gagal simpan');
      } else {
        console.log('Sucess Unchecklist from your TODO list...');
      }
    });
  }
}
module.exports = Model;