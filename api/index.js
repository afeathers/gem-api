module.exports = function(app) {
	require('./minerals')(app);
	require('./listings')(app);
	require('./locations')(app);
	require('./users')(app);
}