import * as React from "react"
import { RouteComponentProps } from "@reach/router";
import { FooterComponent } from "../components/footer";
import NavbarComponent from "../components/navbar"
import { Helmet } from "react-helmet";

export default class NotFound extends React.Component<RouteComponentProps> {
    render() {
        return <div>
        <Helmet>
          <title>Miki - Page Not Found!</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width initial-scale=1 maximum-scale=1 user-scalable=no" />
          <meta name="description" content="Miki, a bot for Discord with the view to make chatting more appealing through gamification and utility!" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Miki - The Discord Bot" />
          <meta property="og:description" content="Miki, a bot for Discord with the view to make chatting more appealing through gamification and utility!" />
          </Helmet>
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