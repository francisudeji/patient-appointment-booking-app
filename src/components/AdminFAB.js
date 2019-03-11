import React from "react"

function AdminFAB() {
  return (
    <footer>
      <nav
        className="navbar navbar-dark fixed-bottom"
        style={{ background: "transparent" }}
      >
        <div className="container">
          <button
            className="btn btn-danger btn-lg d-flex text-center ml-auto mb-5"
            data-toggle="modal"
            data-target="#adminModal"
            style={{
              height: "70px",
              width: "70px",
              borderRadius: "35px",
              fontSize: "3.5rem",
              position: "relative"
            }}
          >
            <span style={{ position: "absolute", top: -15, right: 14 }}>+</span>
          </button>
        </div>
      </nav>
    </footer>
  )
}

export default AdminFAB
