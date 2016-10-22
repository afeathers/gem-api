var Responder = require('../../middleware/Responder');
var Listings = require('../../models/listings');

module.exports = function(req, res, next) {

	var id = req.params.listing_id;

	if(!id) return Responder.badRequest('listing id not supplied.');

	Listings.getById(id)
		.then((listing) => {
			console.log(listing);
			Responder.respond(res, listing);
		})
		.catch((err) => {
			console.log(err);
			Responder.interalError(next, err);
		});

} 