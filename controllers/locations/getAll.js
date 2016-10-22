var Responder = require('../../middleware/Responder');

//Referencing the User model
var Locations = require('../../models/locations');

module.exports = function(req, res, next) {

	Locations.getAll
		.then((locations) => {
			console.log(locations);
			Responder.respond(res, locations);
		})
		.catch((err) => {
			console.log(err);
			Responder.interalError(next, err);
		});

} 