var Controller = require('../controllers');

module.exports = function(app) {

    app.get('/locations/:location_id', 
        Controller.locations.getAll
    );

    app.get('/locations/:location_id', 
        Controller.locations.getById
    );

}