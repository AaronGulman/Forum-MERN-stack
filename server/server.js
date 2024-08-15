import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import users from "./routes/users.js";

dotenv.config();

const server = express();
const PORT = process.env.PORT || 3000;

server.use(cors());
server.use(express.json());

server.use("/", users);

server.listen(PORT, async (req, res) => {
  console.log(`Running on ${PORT}`);
});
