const router = require("express").Router()
const {
  addDoctor,
  getDoctorByEmail,
  getAllDoctors
} = require("../controllers/doctors")

router.get("/getAllDoctors", (req, res) => {
  getAllDoctors(req, res)
})

router.get("/getDoctorByEmail/:email", (req, res) => {
  getDoctorByEmail(req, res)
})

router.post("/add-lecturer", (req, res) => {
  addDoctor(req, res)
})

module.exports = router
