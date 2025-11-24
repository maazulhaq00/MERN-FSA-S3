import express from "express";
import * as authController from "../controllers/authController.js"


const authRouter = express.Router();

authRouter.post("/signup", authController.signup)
authRouter.post("/login", authController.login)

export default authRouter;