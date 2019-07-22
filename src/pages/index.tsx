import * as React from "react"
import NavbarComponent from "../components/navbar"
import { Router } from "@reach/router"
import Home from "./home"
import Donate from "./donate"
import { FooterComponent } from "../components/footer";

export default class Root extends React.Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <Router>
          <Home path="/" />
          <Donate path="/donate"></Donate>
        </Router>
        <FooterComponent />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-j8y0ITrvFafF4EkV1mPW0BKm6dp3c+J9Fky22Man50Ofxo2wNe5pT1oZejDH9/Dt" crossOrigin="anonymous" />
      </div>
    )
  }
}
