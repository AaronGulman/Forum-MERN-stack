import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config();

const connection = mysql.createConnection({
	"host": process.env.DB_HOST,
	"user": process.env.DB_USER,
	"password": process.env.DB_PASSWORD,
	"database": process.env.DB_NAME
})

connection.connect((err)=>{
	if(err){
		console.error("Database error: "+err);
	}else{
		console.log("Connected to the DB")
	}
})

export default connection;