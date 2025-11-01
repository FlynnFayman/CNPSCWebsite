import ApplysDAO from "../dao/ApplysDAO"

export default class ApplysController{
    
    static async apiPostReview(req,res,next) {
        try {
            const name = req.body.name
            const phone = req.body.phone
            const address = req.body.address
            const city = req.body.city
            const zip = req.body.zip
            const date = req.body.date
            const license = req.body.license
            const notes = req.body.notes

            const applyResponse = await ApplysDAO.addApplys(name, phone, address, city, zip, date, license, notes)
            res.json({ status: "success" })
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }
}