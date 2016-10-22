var Responder = require('../../middleware/Responder');
var Minerals = require('../../models/minerals');

module.exports = function(req, res, next) {

	Minerals.getAll()
		.then((minerals) => {
			console.log(minerals);
			Responder.respond(res, minerals);
		})
		.catch((err) => {
			console.log(err);
			Responder.interalError(next, err);
		});

} 