let fs = require('fs');

class Model {
	static bacaFile() {
		let bacaData = JSON.parse(fs.readFileSync('data.json', 'utf8'));
		return bacaData;
	}

	static tambahData(arg) {
		let data = Model.bacaFile();
		data.push({
			"id": data[data.length-1].id + 1,
			"task": arg,
			"complete": true})
		fs.writeFileSync('data.json', JSON.stringify(data));
		return data;
	}

	static cariData(arg) {
		let cariData = Model.bacaFile();
		for (var i = 0; i < cariData.length; i++) {
			if (arg == cariData[i].id) {
				return cariData[i]
			}
		}
	}

	static deleteData(arg) {
		let hapusData = Model.bacaFile();
		let arr = [];
		for (var i = 0; i < hapusData.length; i++) {
			if (arg != hapusData[i].id) {
				arr.push(hapusData[i]);
			}
		}
		fs.writeFileSync('data.json', JSON.stringify(arr));
		return hapusData[i]
	}

}

Model.bacaFile()

module.exports = Model;