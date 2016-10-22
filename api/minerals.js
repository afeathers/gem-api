var Controller = require('../controllers');

module.exports = function(app) {

    app.get('/minerals',
    	Controller.minerals.getAll
    );
}