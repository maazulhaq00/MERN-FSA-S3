import express from 'express'
import dotenv from 'dotenv'
import connectToDB from './config/connectToDb.js'
import cors from "cors"

import categoryRouter from './routers/categoryRouter.js'
import productRouter from './routers/productRouter.js'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors());

connectToDB();


app.get("/", (req, res) => {
    return res.status(200).json({ message: "welcome to app" })
})

app.use("/categories", categoryRouter)
app.use("/products", productRouter)

app.listen(process.env.PORT, () => {
    console.log(`App running: http://localhost:${process.env.PORT}`);

})
// npm i nodemon express dotenv mongoose