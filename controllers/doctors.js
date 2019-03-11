const Doctor = require("../models/Doctor")

async function getAllDoctors(req, res) {
  await Doctors.find({})
    .then(doctors =>
      res.status(200).json({ success: true, message: "Success", doctors })
    )
    .catch(err => res.status(400).json({ error: true, message: err.message }))
}

async function getDoctorByEmail(req, res) {
  await Doctor.find({ email: req.params.email })
    .then(doctor =>
      res.status(200).json({ success: true, message: "Success", doctor })
    )
    .catch(err => res.status(400).json({ error: true, message: err.message }))
}

async function addDoctor(req, res) {
  const {
    firstname,
    lastname,
    email,
    phone,
    dob,
    specialization,
    ssn,
    license,
    address
  } = req.body

  const doctor = new Doctor({
    firstname,
    lastname,
    email,
    phone,
    dob,
    specialization,
    ssn,
    license,
    address
  })

  await doctor
    .save()
    .then(doc =>
      res
        .status(200)
        .json({ success: true, message: "Success", doctor: doc })
    )
    .catch(err => res.status(400).json({ error: true, message: err.message }))
}

module.exports = {
  addDoctor,
  getDoctorByEmail,
  getAllDoctors
}
