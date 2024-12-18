import express from "express"
const app = express()
const port = 8000

app.get('/', (req, res) => {
    res.send('Hello Talha')
})


app.listen(port, () => {
    console.log("SERVER IS RUNNIG AT PORT", port);
})