import React, { useState } from "react"
import {database, auth} from '../authentication/firebase'

function AdminModal() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [dob, setDOB] = useState("")
  const [specialization, setSpecialization] = useState("")
  const [ssn, setSSN] = useState("")
  const [license, setLicense] = useState("")
  const [address, setAddress] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div
      className="modal fade"
      id="adminModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalCenterTitle">
              Add a New Doctor
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form className="doctor-form">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="form-group">
                    <label htmlFor="firstname">First Name</label>
                    <input
                      type="text"
                      id="firstname"
                      className="form-control"
                      placeholder="First Name"
                      value={firstName}
                      onChange={e => setFirstName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="form-group">
                    <label htmlFor="lastname">Last Name</label>
                    <input
                      type="text"
                      id="lastname"
                      className="form-control"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={e => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Email Address"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="text"
                      id="phone"
                      className="form-control"
                      placeholder="Phone Number"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="form-group">
                    <label htmlFor="dob">Date of Birth</label>
                    <input
                      type="date"
                      id="dob"
                      className="form-control"
                      placeholder="Date of Birth"
                      value={dob}
                      onChange={e => setDOB(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="form-group">
                    <label htmlFor="specialization">Specialization</label>
                    <input
                      type="text"
                      id="specialization"
                      className="form-control"
                      placeholder="Area of Specialization"
                      value={specialization}
                      onChange={e => setSpecialization(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="form-group">
                    <label htmlFor="ssn">Social Security Number</label>
                    <input
                      type="text"
                      id="ssn"
                      className="form-control"
                      placeholder="Social Security Number"
                      value={ssn}
                      onChange={e => setSSN(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="form-group">
                    <label htmlFor="licensenumber">License Number</label>
                    <input
                      type="text"
                      id="licensenumber"
                      className="form-control"
                      placeholder="License Number"
                      value={license}
                      onChange={e => setLicense(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <textarea
                      id="address"
                      cols="30"
                      rows="2"
                      className="form-control"
                      placeholder="Address of Doctor"
                      value={address}
                      onChange={e => setAddress(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="password">Temporary Password</label>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      placeholder="Password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <button className="btn btn-danger btn-lg btn-block">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminModal
