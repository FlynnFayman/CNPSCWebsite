import mongodb from "mongodb"
const ObjectId = mongodb.ObjectId

let applys

export default class ApplysDAO{
    static async injectDB(conn){
        if(applys){
            return
        }
        try {
            applys = await conn.db("CNPSC").collection("Applys")
        } catch (e) {
            console.error(`Unable to establish collection handles in ApplysDAO: ${e}`)
        }
    }

    static async addApp(name, phone, address, city, zip, email, date, license, notes){
        try {
            const AppObject = {
                name: name,
                phone: phone,
                address: address,
                city: city,
                zip: zip,
                email: email,
                date: date,
                license: license,
                notes: notes
            }

            return await applys.insertOne(AppObject)
        } catch(e){
            console.log(`Unable to Post Applaction: ${e}`)
            return { error : e }
        }
    }
}