var Responder = require('../../middleware/Responder');

//Referencing the listing model
var Listing = require('../../models/listings');

module.exports = function(req, res, next) {

	console.log(req);
	
	Listing.getAll()
		.then((listings) => {
			console.log(listings);
			Responder.respond(res, listings);
		})
		.catch((err) => {
			console.log(err);
			Responder.interalError(next, err);
		});

} 