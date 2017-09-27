class View {
	static tampilList(input){
		let masukan = input;
		for (let i = 0; i < masukan.length; i++) {
			console.log(masukan[i]);
		}
	}
}

module.exports = View;