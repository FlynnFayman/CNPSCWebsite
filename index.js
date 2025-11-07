import app from "./Server.js"
import mongodb from "mongodb"
import ApplysDAO from "./dao/ApplysDAO.js"
import dotenv from "dotenv"
dotenv.config()

const MongoClient = mongodb.MongoClient
const mongodb_Username = process.env["MONGO_USERNAME"]
const mongodb_Password = process.env["MONGO_PASSWORD"]
const uri = 
`mongodb+srv://${mongodb_Username}:${mongodb_Password}@applys.il3ykiz.mongodb.net/?appName=Applys`

const port = 8080

// Connect to Mongo
MongoClient.connect(
    uri,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true
    })
.catch(err => {
    console.error(err.stack)
    process.exit(1)
})
.then(async client  => {
    await ApplysDAO.injectDB(client)
    app.listen(port, () => {
        console.log(`Listing on port ${port}`)
    })
})