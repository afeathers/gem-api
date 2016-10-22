var Responder = require('../../middleware/Responder');

//Referencing the listing model
var Listings = require('../../models/listings');

module.exports = function(req, res, next) {

	console.log(req);
	//Let's break down the pieces of the request into variables we can process.
    var title = req.body.title;
    var image = req.body.image;
    var content = req.body.content
    var link = req.body.link


	if(!title || !image) return Responder.badRequest();
	// Let's use the create function from that model. 
	Listings.create(title, image, content, link)
		.then((listing) => {
			console.log(listing);
			Responder.respond(res, listing);
		})
		.catch((err) => {
			console.log(err);
			Responder.interalError(next, err);
		});

} 