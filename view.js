class View {
  static tampilkanTodo(data) {
    console.log('berikut adalah list todo nya :')
    
    for (var i = 0; i < data.length; i++){
      if(data[i].complete == true){
        console.log(`${data[i].id}. [x] ${data[i].task} `)
      }else{
      
      console.log(`${data[i].id}.[ ] ${data[i].task}`)
      }
    }
  }

  static tampilkanTodoBaru(data){
    console.log(`Added ${data.join('')} to Your TODO list`)
  }

  static find(data){
    console.log(`here it is ${JSON.stringify(data)}`)
  }

  static deletedId(data){
    console.log(`deleted ${JSON.stringify(data)}  list`)
  }

 
}

module.exports = View