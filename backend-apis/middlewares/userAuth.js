import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config()

const isAuthenticated = (req, res, next) => {
    try{
        const token = req.headers["authorization"];

        if(!token) {
            return res.status(403).json({message: "Token is required"})
        }

        let decoded_data = jwt.verify(token, process.env.SECRET_KEY)
        
        req.user = decoded_data;

        next()
    }
    catch(err){
            return res.status(403).json({message: "Token invalid or expired"})

    }
}


export default isAuthenticated;