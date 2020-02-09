import * as React from "react"
import { Router } from "@reach/router"
import Home from "./home"
import Donate from "./donate"
import About from "./about"
import Commands from "./commands"
import Invite from "./invite"

export default class Root extends React.Component {
  render() {
    return (
      <Router>
        <Home path="/" />
        <Donate path="/donate"/>
        <About path="/about"/>
        <Commands path="/commands"/>
        <Invite path="/invite"/>
      </Router>
    )
  }
}
