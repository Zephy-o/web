import * as React from "react"
import NavbarComponent from "../components/navbar"
import { Router } from "@reach/router"
import Home from "./home"
import { FooterComponent } from "../components/footer";

export default class Root extends React.Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <Router>
          <Home path="/" />
        </Router>
        <FooterComponent />
      </div>
    )
  }
}
