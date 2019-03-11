const mongoose = require("mongoose")
const timestamp = require("mongoose-timestamp")
const Schema = mongoose.Schema

const DoctorSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  dob: {
    type: String,
    required: true
  },
  specialization: {
    type: String,
    required: true
  },
  ssn: {
    type: String,
    required: true
  },
  license: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  }
})

DoctorSchema.plugin(timestamp)
module.exports = Doctor = mongoose.model("doctors", DoctorSchema)
