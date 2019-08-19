module.exports = {

	client: 'mysql',
	connection: {
		database: 'ssconsultoria',
		user: 'root',
		password: 'mv19ma94'
	},
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		tableName: 'knex_migrations'
	}

};
