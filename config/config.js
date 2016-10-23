module.exports = {
	token: {
		expireInMinutes: 20
	},
	database: {
		postgres: {
			protocol: 'postgres', 
			username: 'postgres', 
			password: 'dhai492', 
			host: 'localhost', 
			port: 5432, 
			db: 'gemfinder'
		},
		redis: {
			host: '127.0.0.1',
			port: 6379
		}
	}
}