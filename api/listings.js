var Controller = require('../controllers');

module.exports = function(app) {

    app.get('/listings/:listing_id',
    	Controller.listings.getById
    );
    app.get('/listings',
    	Controller.listings.getAll
    );
    app.post('/listings',
    	Controller.listings.create
    );

}