import ApplysDAO from "../dao/ApplysDAO.js"

export default class ApplysController{
    
    static async apiPostApply(req,res,next) {
        try {
            const name = req.body.name
            const phone = req.body.phone
            const address = req.body.address
            const city = req.body.city
            const email = req.body.email
            const zip = req.body.zip
            const date = req.body.date
            const license = req.body.license
            const notes = req.body.notes

            const applyResponse = await ApplysDAO.addApp(name, phone, address, city, zip, email, date, license, notes)
            res.json({ status: "success" })
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }
}