import * as React from "react"
import { RouteComponentProps } from "@reach/router"
import { FooterComponent } from "../components/footer"
import { Helmet } from "react-helmet";
import { Button, Color } from "@veld/components"
import Navbar from "../components/navbar"

const INVITE_URL = "https://discordapp.com/oauth2/authorize?&client_id=160185389313818624&scope=bot&permissions=355593334";

export default class Invite extends React.Component<RouteComponentProps> {
  componentDidMount() {
    setInterval(() => {
        window.location.replace(INVITE_URL);
    }, 1000);
  }

  render() {
    return (
      <div>
        <Helmet>
        <title>Miki - The Discord bot!</title>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width initial-scale=1 maximum-scale=1 user-scalable=no" />
          <meta name="description" content="Miki, a bot for Discord with the view to make chatting more appealing through gamification and utility!" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Miki - The Discord Bot" />
          <meta property="og:description" content="Miki, a bot for Discord with the view to make chatting more appealing through gamification and utility!" />
        </Helmet>
        <Navbar className="navbar is-smoother is-fixed-top"/>
        <div className="section hero is-middle is-textured first">
          <div className="container hero-body">
            <div className="columns is-vcentered">
              <div className="column is-5 content">
                <h1 className="title has-text-white is-spaced">
                  Hold on tight
                </h1>
                <p className="subtitle has-text-white">
                  We're delivering your new favourite bot to your server!
                </p>
                <div className="field is-grouped">
                    <div className="control">
                      <Button
                        href={INVITE_URL}
                        type={Color.DANGER}
                        value="Did it not work?"
                        isOutlined
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <FooterComponent />
      </div>
    )
  }
}