import express from "express"
import cors from 'cors'
import connection from './db/connection.js'


const server = express();
const PORT = process.env.PORT || 3000

server.use(cors());
server.use(express.json())


server.get('/test-db', async (req, res) => {
    try {
        const [rows] = await connection.query('SELECT 1 + 1 AS result');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Database connection failed' });
    }
});

server.listen(PORT ,async (req,res)=>{

	console.log(`Running on ${PORT}`)
})
