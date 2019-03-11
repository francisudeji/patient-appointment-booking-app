import React from "react"
import { Link } from "react-router-dom"

function AdminLayout({ children, currentScreen, setCurrentScreen }) {
  return (
    <div className="layout">
      <header>
        <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-danger">
          <div className="container">
            <Link className="navbar-brand" to="/admin">
              Appointment Booking System
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <button
                    onClick={e => setCurrentScreen("appointments")}
                    className="btn btn-link text-white"
                  >
                    Appointments
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    onClick={e => setCurrentScreen("doctors")}
                    className="btn btn-link text-white"
                  >
                    Doctors
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    onClick={e => setCurrentScreen("patients")}
                    className="btn btn-link text-white"
                  >
                    Patients
                  </button>
                </li>
              </ul>
              <div className="my-2 my-lg-0">
                <button className="btn btn-dark my-2 my-sm-0" type="button">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main className="main-content mb-5" style={{ paddingTop: "70px" }}>
        <div className="container">{children}</div>
      </main>

    </div>
  )
}

export default AdminLayout
