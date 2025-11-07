import express from "express"
import ApplysCtrl from "./Apply.controller.js"

const router = express.Router()

router.route("/Apply").post(ApplysCtrl.apiPostApply)


export default router