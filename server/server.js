import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import users from "./routes/users.js";
import cookieParser from "cookie-parser";

dotenv.config();

const server = express();
const PORT = process.env.PORT || 3000;

server.use(cors());
server.use(express.json());
server.use(cookieParser())

server.use("/", users);x


server.listen(PORT, async (req, res) => {
  console.log(`Running on ${PORT}`);
});
