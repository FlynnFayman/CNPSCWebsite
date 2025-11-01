import express from "express"
import cors from "cors"
import Applys from "./api/Applys.route.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1/Applys",Applys)
app.use("/*snomething", (req,res) => {
    res.status(404).json({error:"not found"})
})

export default app