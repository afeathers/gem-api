var query = require('../middleware/Postgres').Query;
var DB = 0;

module.exports.getById = function(id) {

	var sql = 'SELECT * FROM Minerals WHERE id = $1';

	return new Promise((resolve, reject) => {
		query(DB, sql, [id], function(data) {
		    if (!data || data.isError) return reject(data);
		    return resolve(data);
	  	});
	});

}

module.exports.getAll = function() {

	var sql = 'SELECT * FROM Minerals';

	return new Promise((resolve, reject) => {
		query(DB, sql, [], function(data) {
		    if (!data || data.isError) return reject(data);
		    return resolve(data);
	  	});
	});

}