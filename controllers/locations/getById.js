var Responder = require('../../middleware/Responder');
var Locations = require('../../models/locations');

module.exports = function(req, res, next) {

	var id = req.params.company_id;

	if(!id) return Responder.badRequest('locations id not supplied.');

	Locations.getById(id)
		.then((location) => {
			console.log(location);
			Responder.respond(res, location);
		})
		.catch((err) => {
			console.log(err);
			Responder.interalError(next, err);
		});

} 