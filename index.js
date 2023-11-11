const express = require("express")
const { connection } = require("./db")
const cors=require("cors")
const { travelRouter } = require("./routes/travel.routes")
require('dotenv').config();

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api',travelRouter)

app.listen(process.env.Port, async () => {
    try {
        await connection
        console.log("conneccted with Database")
    } catch (err) {
        console.log(err.message)
    }
    console.log(`Server is running at Port ${process.env.Port}`);
})