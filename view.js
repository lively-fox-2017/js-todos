class View {
  static tampilData(data){
    for (var i = 0; i < data.length; i++) {
      console.log(`${i + 1} ${data[i].task}`)
    }
  }
}

module.exports = View
