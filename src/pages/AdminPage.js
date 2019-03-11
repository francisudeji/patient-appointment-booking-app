import React from "react"
import { Link } from "react-router-dom"
import AdminLayout from "../components/AdminLayout"
import AdminModal from "../components/AdminModal"
import AdminFAB from "../components/AdminFAB"

function AdminPage() {
  const [currentScreen, setCurrentScreen] = React.useState("doctors")

  return (
    <div className="admin-page">
      <AdminModal />
      <AdminLayout
        currentScreen={currentScreen}
        setCurrentScreen={setCurrentScreen}
      >
        {currentScreen === "doctors" && (
          <div className="doctors">
            <h1 className="my-3">Doctors</h1>

            <AdminFAB />
          </div>
        )}
        {currentScreen === "patients" && (
          <div className="patients">
            <h1>Patients</h1>
          </div>
        )}
      </AdminLayout>
    </div>
  )
}

export default AdminPage
