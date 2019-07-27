import * as React from "react"
import NavbarComponent from "../components/navbar"
import { Router } from "@reach/router"
import Home from "./home"
import Donate from "./donate"
import About from "./about"
import { FooterComponent } from "../components/footer";

export default class Root extends React.Component {
  render() {
    return (
      <Router>
        <Home path="/" />
        <Donate path="/donate"></Donate>
        <About path="/about"></About>
      </Router>
    )
  }
}
