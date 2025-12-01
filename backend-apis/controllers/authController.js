import User from "../models/userModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
dotenv.config()

const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body

        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(409).json({
                message: "User with this email already exist, Please login.",
                success: false
            })
        }

        let encryptedPassword = await bcrypt.hash(password, 10)

        await User.create({ username, email, password: encryptedPassword })

        // const user = new User({username, email, password, role: "user"});

        // user.password = await bcrypt.hash(password, 10);

        // await user.save()

        return res.status(201).json({ message: "Sign up successfully" })
    }
    catch (err) {
        return res.status(500).json({ success: false, message: "Internal Server error", error: err })
    }
}

const login = async (req, res) => {
    try {

        let { email, password } = req.body;

        const user = await User.findOne({ email });

        let errMsg = "Incorrect email or password."

        if (!user) {
            return res.status(403).json({ message: errMsg, success: false })
        }

        const isPasswordEqual = await bcrypt.compare(password, user.password);

        if (!isPasswordEqual) {
            return res.status(403).json({ message: errMsg, success: false })
        }

        const jwtToken = jwt.sign(
            {email: user.email, role: user.role, _id: user._id},
            process.env.SECRET_KEY,
            { expiresIn: "24h" }
        )

        return res.status(200).json({message: "Login Success", success: true, token: jwtToken, role:  user.role})

    }
    catch (err) {
        return res.status(500).json({ success: false, message: "Internal Server error", error: err })
    }
}

export {
    signup, login
}