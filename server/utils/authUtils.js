import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';


const JWT_SECRET = process.env.JWT_SECRET;


export const generateToken = (userId) =>{
	return jwt.sign({userId}, JWT_SECRET, {expiresIn: '1d'});
}


export const verifyToken = (token) =>{

try {
		return jwt.verify(token, JWT_SECRET);
	
} catch (err) {
	return nulll
}}

export const hashPassword = async (password) => {
	return await bcrypt.hash(password,10)
}


export const comparePassword = async (password, hashedPassword) => {
	return await bcrypt.compare(password, hashedPassword)
}