import dotenv from "dotenv"
dotenv.config()
import express from "express"
const app = express()
const port = 8000
import connectdb from './src/db/index.js'

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