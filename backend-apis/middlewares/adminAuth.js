import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config()

const isAdminAuthenticated = (req, res, next) => {
    try {
        const token = req.headers["authorization"];

        if (!token) {
            return res.status(403).json({ message: "Token is required" })
        }

        let decoded_data = jwt.verify(token, process.env.SECRET_KEY)

        if (decoded_data.role == "admin") {
            req.user = decoded_data;
            next()
        }
        else {
            return res.status(403).json({ message: "This operation can be done by the user with admin role" })
        }
    }
    catch (err) {
        return res.status(403).json({ message: "Token invalid or expired" })
    }
}


export default isAdminAuthenticated;