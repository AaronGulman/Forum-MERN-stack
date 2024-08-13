import express from "express"
import cors from 'cors'
import bcrypt from 'bcrypt';
import connection from './db/connection.js'
import dotenv from 'dotenv'

dotenv.config();

const server = express();
const PORT = process.env.PORT || 3000
const saltRounds = 10;

server.use(cors());
server.use(express.json())

server.get('/test-db', async (req, res) => {
    try {
        const [rows] = await connection.query('SELECT * FROM users');
        console.log(req.body)
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Database connection failed' });
    }
});

server.post('/test-db', async (req,res)=> {
    try{
        const {username,email,password} = req.body;
        if(!username || !password || !email){
           return res.status(400).json({error:"Username,email and password are required"});
        }
        const [existingUser] = await connection.query(
            'SELECT * FROM users WHERE username = ?',
            [username]
        );

        if (existingUser.length > 0) {
            return res.status(400).json({ error: 'Username already exists' });
        }

        //Here's our password hashing:
        const password_hash = await bcrypt.hash(password,saltRounds);


        const [result] = connection.query(
            `INSERT INTO users (username,email,password_hash) VALUES (?,?,?)`,
            [username,email,password_hash]
        );

        res.status(201).json({id: result.insertedId,username,email})

    }catch(error){
        res.status(500).json({error: 'Database connection failed'})
    }
})

server.listen(PORT ,async (req,res)=>{
	console.log(`Running on ${PORT}`)
})
