const fs = require("fs");

class Model {
	static aturList(input){
		let arr = [];
		if (input[0] === "help" || !input[0]) {
			arr.push("$ node index.js ", "$ node index.js help", "$ node index.js list", "$ node index.js add <task_content>",
			"$ node index.js task <task_id>", "$ node index.js delete <task_id>", "$ node index.js complete <task_id>", "$ node index.js uncomplete <task_id>");
		} else if (input[0] === "list" || !input[1]) {
			let read = JSON.parse(fs.readFileSync("data.json", "utf8"));
			for (let i = 0; i < read.length; i++){
				if (read[i].completed) {
					arr.push(read[i].id+". [X] "+read[i].tugas);
				} else {
					arr.push(read[i].id+". [ ] "+read[i].tugas);
				}
			}
		} else if (input[0] === "list:created") {
			let read = JSON.parse(fs.readFileSync("data.json", "utf8"));
			let arrSort = [];
			if (input[1] === "asc" || !input[1]) {
				for (let i = 0; i < read.length; i++) {
					arrSort.push(read[i].created_at)
				}
				
				for (let i = 1; i < arrSort.length; i++) {
					for (let j = 0; j <= i - 1; j++){
						if (arrSort[i] < arrSort[j]) {
							let temp = arrSort[j];
							arrSort[j] = arrSort[i];
							arrSort[i] = temp;
						}
					}
				}
				
				for (let i = 0; i < arrSort.length; i++) {
					for (let j = 0; j < arrSort.length; j++) {
						if(arrSort[i] === read[j].created_at) {
							if (read[j].completed) {
								arr.push(read[j].id+". [X] "+read[j].tugas);
							} else {
								arr.push(read[j].id+". [ ] "+read[j].tugas);
							}
						}
					}
				}
			} else if (input[1] === "desc") {
				for (let i = 0; i < read.length; i++) {
					arrSort.push(read[i].created_at)
				}
				
				for (let i = 1; i < arrSort.length; i++) {
					for (let j = 0; j <= i - 1; j++){
						if (arrSort[i] > arrSort[j]) {
							let temp = arrSort[j];
							arrSort[j] = arrSort[i];
							arrSort[i] = temp;
						}
					}
				}
				
				for (let i = 0; i < arrSort.length; i++) {
					for (let j = 0; j < arrSort.length; j++) {
						if(arrSort[i] === read[j].created_at) {
							if (read[j].completed) {
								arr.push(read[j].id+". [X] "+read[j].tugas);
							} else {
								arr.push(read[j].id+". [ ] "+read[j].tugas);
							}
						}
					}
				}
			} else {
				arr.push("Maaf sort yang anda masukan salah");
			}
		} else if (input[0] === "list:completed") {
			let read = JSON.parse(fs.readFileSync("data.json", "utf8"));
			let arrSort = [];
			if (input[1] === "asc" || !input[1]) {
				for (let i = 0; i < read.length; i++) {
					if (read[i].completed_date !== null) {
						arrSort.push(read[i].completed_date);
					}
				}
				
				if (arrSort.length === 0) {
					return arr = ["Belom ada tugas yang selesai"];
				} else if (arrSort.length === 1) {
					for (let i = 0; i < read.length; i++) {
						if(arrSort[0] === read[i].completed_date){
							arr.push(read[i].id+". [X] "+read[i].tugas);
						}
					}
				} else {
					for (let i = 1; i < arrSort.length; i++) {
						for (let j = 0; j <= i - 1; j++){
							if (arrSort[i] < arrSort[j]) {
								let temp = arrSort[j];
								arrSort[j] = arrSort[i];
								arrSort[i] = temp;
							}
						}
					}
					
					for (let i = 0; i < arrSort.length; i++) {
						for (let j = 0; j < read.length; j++) {
							if (read[j].completed_date !== null) {
								if (arrSort[i] === read[j].completed_date) {
									arr.push(read[j].id+". [X] "+read[j].tugas);
								}
							}						
						}
					}
				}
			} else if (input[1] === "desc") {
				for (let i = 0; i < read.length; i++) {
					if (read[i].completed_date !== null) {
						arrSort.push(read[i].completed_date)
					}
				}
				
				if (arrSort.length === 0) {
					return arr = ["Belom ada tugas yang selesai"];
				} else if (arrSort.length === 1) {
					for (let i = 0; i < read.length; i++) {
						if(arrSort[0] === read[i].completed_date){
							arr.push(read[i].id+". [X] "+read[i].tugas);
						}
					}
				} else {
					for (let i = 1; i < arrSort.length; i++) {
						for (let j = 0; j <= i - 1; j++){
							if (arrSort[i] > arrSort[j]) {
								let temp = arrSort[j];
								arrSort[j] = arrSort[i];
								arrSort[i] = temp;
							}
						}
					}
					
					for (let i = 0; i < arrSort.length; i++) {
						for (let j = 0; j < read.length; j++) {
							if (arrSort[i] === read[j].completed_date) {
								if(arrSort[i] === read[j].completed_date) {
									arr.push(read[j].id+". [X] "+read[j].tugas);
								}
							}
						}
					}
				}
			} else {
				arr.push("Maaf sort yang anda masukan salah");
			}
		} else if (input[0] === "add") {
			if (input[1]) {
				let read = JSON.parse(fs.readFileSync("data.json", "utf8"));
				let arrList = read;
				let id = read.length + 1;
				let tugas = input[1];
				let selesai = false;
				let date = new Date();
				let completeDate = null;
				arrList.push({id:id, tugas:tugas, completed:selesai, created_at:date.toISOString(), completed_date:completeDate});
				fs.writeFileSync('data.json', JSON.stringify(arrList , null, 2));
				arr.push("Data berhasil dimasukan");
			} else	{
				arr.push("Tidak ada data yang anda tambahkan");
			}
		} else if (input[0] === "task") {
			if (input[1]) {
				let read = JSON.parse(fs.readFileSync("data.json", "utf8"));
				for (let i = 0; i < read.length; i++) {
					if (read[i].id.toString() === input[1]) {
						arr.push(read[i].id+". "+read[i].tugas);
						return arr;
					}
				}
				
				arr.push("Maaf Id yang anda masukan tidak valid");
			} else {
				arr.push("Tidak ada data yang anda cari");
			}
		} else if (input[0] === "delete") {
			if (input[1]) {
				let read = JSON.parse(fs.readFileSync("data.json", "utf8"));
				for (let i = 0; i < read.length; i++) {
					if (read[i].id.toString() === input[1]) {
						read.splice(i, 1);
						fs.writeFileSync('data.json', JSON.stringify(read , null, 2));
						return arr = ["Data Berhasil dihapus"];
					}
				}
				
				arr.push("Maaf Id yang anda masukan tidak valid");
			} else {
				arr.push("Tidak ada data dyang anda hapus");
			}
		} else if (input[0] === "completed" || input[0] === "uncompleted") {
			let read = JSON.parse(fs.readFileSync("data.json", "utf8"));
			if (input[0] === "completed" && input[1]) {
				for (let i = 0; i < read.length; i++) {
					if (read[i].id.toString() === input[1]) {
						read[i].completed = true;
						read[i].completed_date = new Date().toISOString();
						break;
					} else if (read[i].id.toString() !== input[i] && i === read.length-1) {
						return arr = ["Maaf Id yang anda masukan tidak ada"];
					}
				}
				
				fs.writeFileSync('data.json', JSON.stringify(read , null, 2));
				arr.push("Berhasil merubah");
			} else if (input[0] === "uncompleted" && input[1]) {
				for (let i = 0; i < read.length; i++) {
					if (read[i].id.toString() === input[1]) {
						read[i].completed = false;
						read[i].completed_date = null;
						break;
					} else if (read[i].id.toString() !== input[i] && i === read.length-1) {
						return arr = ["Maaf Id yang anda masukan tidak ada"];
					}
				}
				
				fs.writeFileSync('data.json', JSON.stringify(read , null, 2));
				arr.push("Berhasil merubah");
			} else {
				arr.push("Tidak ada data yang anda ubah");
			}
		} else {
			arr.push("Maaf inputan yang anda masukan salah");
		}
		
		return arr;
	}
}

module.exports = Model;