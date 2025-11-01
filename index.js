import app from "./Server.js"
import mongodb from "mongodb"
import ApplysDAO from "./dao/ApplysDAO.js"
import dotenv from "dotenv"
dotenv.config()
//import ApplysDAO from "./dao/applysDAO.js"

const MongoClient = mongodb.MongoClient
const mongodb_Username = process.env["MONGO_USERNAME"]
const mongodb_Password = process.env["MONGO_PASSWORD"]
const uri = 
`mongodb+srv://${mongodb_Username}:${mongodb_Password}@cluster0.55u9rsa.mongodb.net/?appName=Cluster0`

console.log(mongodb_Password)
const port = 8080

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
        console.log(`Listing on port ${port }`)
    })
})



// Join form code
// document.getElementById('joinForm').addEventListener('submit', function(event){

//     event.preventDefault();

//     const fullName = document.getElementById('name').value;
//     const PhoneNumber = document.getElementById('phone').value;
//     const Address = document.getElementById('address').value;
//     const City = document.getElementById('city').value;
//     const Zip = document.getElementById('zip').value;
//     const Date = document.getElementById('date').value;
//     const License = document.getElementById('license').value;
//     const Children = document.getElementById('children').value;
//     const Prior = document.getElementById('prior').value;
//     const PriorName = document.getElementById('priorName').value;
//     const WhenWhere = document.getElementById('whenWhere').value;
//     const Notes = document.getElementById('notes').value;

//     if (Zip.length !== 5) {
//         alert('ZIP code must be 5 digits');
//         return;
//     }

//     const data = {
//         fullName,
//         PhoneNumber,
//         Address,
//         City,
//         Zip,
//         Date,
//         License,
//         Children,
//         Prior,
//         PriorName,
//         WhenWhere,
//         Notes
//     }



    
    
// })