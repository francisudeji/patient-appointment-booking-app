import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import HomePage from "./pages/HomePage"
import PatientLogin from "./pages/PatientLogin"
import PatientRegister from "./pages/PatientRegister"
import DoctorLogin from "./pages/DoctorLogin"
import AdminPage from "./pages/AdminPage"
import AdminLogin from "./pages/AdminLogin"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/patient/login" component={PatientLogin} />
        <Route exact path="/patient/register" component={PatientRegister} />
        <Route exact path="/doctor/login" component={DoctorLogin} />
        <Route exact path="/admin" component={AdminPage} />
        <Route exact path="/admin/login" component={AdminLogin} />
      </Switch>
    </Router>
  )
}

export default App
