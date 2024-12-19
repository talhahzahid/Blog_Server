import dotenv from "dotenv"
dotenv.config()
import express from "express"
const app = express()
const port = 8000
import cookieParser from "cookie-parser"
import connectdb from './src/db/index.js'
import router from "./src/routes/user.routes.js"

app.use(express.json())
app.use(cookieParser())
app.use('/user', router)
app.get('/', (req, res) => {
    res.send('Hello Talha')
})



connectdb()
    .then(() => {
        app.listen(port, () => {
            console.log("SERVER IS RUNNIG AT PORT", port);
        })
    })
    .catch((err) => {
        console.log(err);
    })