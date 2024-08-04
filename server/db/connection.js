import mysql from 'mysql2/promise'

const connection = await mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'YOUR MYSQL PASSWORD',
	database: 'forum'
})

export default connection;