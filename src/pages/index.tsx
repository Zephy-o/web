import * as React from "react"
import { Router } from "@reach/router"
import Home from "./home"
import Donate from "./donate"
import About from "./about"
import Commands from "./commands"

export default class Root extends React.Component {
  render() {
    return (
      <Router>
        <Home path="/" />
        <Donate path="/donate"></Donate>
        <About path="/about"></About>
        <Commands path="/commands"></Commands>
      </Router>
    )
  }
}
