import express from "express"
import ApplysCtrl from "./applys.controller.js"

const router = express.Router()

router.route("/").get((req,res) => {res.send("Hello World")})

router.route("/Apply").post(ApplysCtrl.apiPostApply)

export default router