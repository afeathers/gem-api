var Controller = require('../controllers');

module.exports = function(app) {

    app.get('/listings',
    	Controller.listings.getAll
    );
    app.post('/listings',
    	Controller.listings.create
    );

}