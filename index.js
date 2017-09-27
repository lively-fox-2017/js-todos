const Controller = require('./controller.js');

(function start() {
	const input = process.argv.slice(2);
	Controller.menu(input);
})();