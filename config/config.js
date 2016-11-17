module.exports = {
	token: {
		expireInMinutes: 20
	},
	database: {
		postgres: {
			protocol: 'postgres', 
			username: 'postgres', 
			password: '', 
			host: 'postgres', 
			port: 5432, 
			db: 'gemfinder'
		},
		redis: {
			host: 'redis',
			port: 6379
		}
	}
}