import * as React from "react"
import { RouteComponentProps } from "@reach/router";
import { FooterComponent } from "../components/footer";
import NavbarComponent from "../components/navbar"

export default class NotFound extends React.Component<RouteComponentProps> {
    render() {
        return <div>
          <NavbarComponent />
            <div className="section hero is-large">
                <div className="container content">
                    <h1 className="title">404 - Page not Found!</h1>
                    <h2 className="subtitle">We've never seen this page before!</h2>
                </div>
            </div>
          <FooterComponent />
        </div>
    }
}