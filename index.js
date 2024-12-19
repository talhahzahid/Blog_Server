import dotenv from "dotenv"
dotenv.config()
import express, { urlencoded } from "express"
const app = express()
const port = 8000
import cookieParser from "cookie-parser"
import cors from "cors"
import connectdb from './src/db/index.js'
import router from "./src/routes/user.routes.js"

const corsOption = {
    origin: '',
    Credentials: true
}
app.use(cors(corsOption))
app.use((urlencoded({ extended: false })))
app.use(express.json())
app.use(cookieParser())
app.use('/user', router)



app.get('/', (req, res) => {
    res.send('Hello Talha')
})


// database 
connectdb()
    .then(() => {
        app.listen(port, () => {
            console.log("SERVER IS RUNNIG AT PORT", port);
        })
    })
    .catch((err) => {
        console.log(err);
    })