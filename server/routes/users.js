import express from "express";
import db from "../db/connection.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();
const router = express.Router();

router.use(cookieParser());

router.get("/dashboard", async (req, res) => {
  try {
	const [users] = await db.promise().query(`SELECT * FROM users;`);
	res.status(202).json({ message: "Success", users });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch the data" });
  }
});

// router.post("/register", async (req, res) => {});

export default router;
