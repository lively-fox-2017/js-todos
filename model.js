'use strict'
let fs = require('fs')

class Model {
  static getData() {
    let data = fs.readFileSync('./data.json', 'utf8')
    return JSON.parse(data)
  }

  static saveData(data) {
    fs.writeFile('data.json', JSON.stringify(data, null, '\t'))
  }

  static addData(task) {
    let data = this.getData()
    let tgl = new Date()
    let todo = {
      "id": data.length + 1,
      "todo": task,
      "completed": false,
      "createdAt": tgl.toISOString(),
      "completedAt": 0
    }
    data.push(todo)
    this.saveData(data)
    return task
  }

  static getID(id) {
    let data = this.getData()
    let stsID = (data[id - 1].completed) ? '[X]' : '[ ]'

    return `${data[id-1].id}. ${stsID}${data[id-1].todo}`

  }

  static deleteID(id) {
    let data = this.getData()

    let willDelete = `${data[id-1].todo}`
    data.splice(id - 1, 1)
    for (let i = 0; i < data.length; i++) {
      data[i].id = i + 1
    }
    this.saveData(data)
    return willDelete

  }

  static completedID(id) {
    let data = this.getData()

    data[id - 1].completed = true
    this.saveData(data)
    return data[id - 1].todo

  }

  static listCreatedAsc() {
    let data = this.getData()
    data.sort((a, b) => a.createdAt > b.createdAt)
    return data
  }

  static listCreatedDesc() {
    let data = this.getData()
    data.sort((a, b) => a.createdAt < b.createdAt)
    return data
  }

  static listCompletedAsc() {
    let data = this.getData()
    data.sort((a, b) => a.completedAt > b.completedAt)
    return data
  }

  static listCompletedDesc() {
    let data = this.getData()
    data.sort((a, b) => a.completedAt < b.completedAt)
    return data
  }



}


module.exports = Model;
