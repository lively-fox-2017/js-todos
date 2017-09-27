const Model = require("./model.js");
const View = require("./view.js");

class Controller {
	constructor(input) {
		this.input = input;
	}
	
	list() {
		let model = Model.aturList(this.input);
		View.tampilList(model);
	}	
}

module.exports = Controller;