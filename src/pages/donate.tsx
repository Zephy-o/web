import * as React from "react"
import { RouteComponentProps } from "@reach/router"
import NavbarComponent from "../components/navbar"
import { FooterComponent } from "../components/footer"
import donate1 from "../img/donate/donate_1.png"
import donate2 from "../img/donate/donate_2.png"
import donate3 from "../img/donate/donate_3.png"
import Helmet from "react-helmet"

export default class Donate extends React.Component<RouteComponentProps> {
  render() {
    return (
      <div>
        <Helmet>
          <title>Miki - The Discord bot!</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width initial-scale=1 maximum-scale=1 user-scalable=no" />
          <meta name="description" content="Miki, a bot for Discord with the view to make chatting more appealing through gamification and utility!" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Miki - The Discord Bot" />
          <meta property="og:description" content="Miki, a bot for Discord with the view to make chatting more appealing through gamification and utility!" />
        </Helmet>
        <NavbarComponent />
        <div className="section hero is-medium is-textured">
          <div className="container content">
            <h1 className="has-text-light">Feeling generous?</h1>
            <p className="has-text-light">
              Miki is a bot that is growing very fast, and to maintain a bot
              this big I have to take a lot of time from my daily life and focus
              on improving Miki for you all to enjoy.
            </p>
          </div>
        </div>
        <div
          className="content is-large is-vcentered"
          style={{ backgroundColor: "rgb(236, 108, 88)" }}
        >
          <div className="container">
            <h3 className="has-text-white is-padded is-marginless">
              <i className="fab fa-patreon seperated">Patreon</i>
            </h3>
          </div>
        </div>

        <div className="content section container">
          <p>
            Miki uses Patreon as her main source of funding to be able to stay
            up, functional, and to pay artists, freelancers or designers to keep
            the platform as high quality as it could possibly be.
          </p>

          <div className="columns is-vcentered">
            <div className="column">
              <h3>Extra commands</h3>
              <p>
                As an active donator you will get access to our more
                process-expensive commands. These are mostly commands that
                require on-the-go image manipulation, or multiple requests to
                external services we can not monitor.
              </p>
            </div>
            <div className="column has-text-right">
              <img src={donate1} alt="" />
            </div>
          </div>

          <div className="columns is-vcentered">
            <div className="column">
              <h3>Doubled daily rewards</h3>
              <p>
                While you donate to Miki, your daily rewards (+ streaks) will be
                doubled! This means that instead of 100 mekos, you gain 200. If
                your streak then would be 20 days, you would make 1,000 mekos
                that day instead of 500!
              </p>
            </div>
            <div className="column has-text-right">
              <img src={donate2} alt="" />
            </div>
          </div>

          <div className="columns is-vcentered">
            <div className="column">
              <h3>A special achievement</h3>
              <p>
                Show off your patronage by showing off your cool donator profile
                badge! Use it to impress your friends!
              </p>
            </div>
            <div className="column has-text-right">
              <img src={donate3} alt="" />
            </div>
          </div>

          <div className="has-text-centered">
            <a
              className="button is-large"
              href="https://www.patreon.com/bePatron?u=2542689"
            >
              <div
                className="button is-rounded is-large"
                style={{ color: "#fff", backgroundColor: "#ec6c58" }}
              >
                <i className="fab fa-patreon"></i> &nbsp; Become a Patreon
              </div>
            </a>
          </div>
        </div>

        <div
          className="content is-large is-vcentered"
          style={{ backgroundColor: "rgb(100, 157, 189)" }}
        >
          <div className="container">
            <h3 className="has-text-white is-padded is-marginless">
              <i className="fas fa-coffee seperated"></i> Ko-fi
            </h3>
          </div>
        </div>

        <div className="content">
          <div className="container">
            <p>
              Not a fan of commitment? No worries, we also support one-time
              donations with Ko-fi! You get instant rewards if you pass your
              discord user Id at the end of your message! A fair warning though.
              You'll be missing out on a handful of features by using Kofi.
            </p>
            <div className="section columns">
              <div className="column">
                <h4>No donator chat access</h4>
                <p>
                  As a one-time only donator, you won't get access to the
                  patreon chat.
                </p>
              </div>
              <div className="column">
                <h4>No patreon timeline access</h4>
                <p>
                  I post new polls, interesting bits or posts on Patreon every
                  now and then. And you'll be missing out on these too.
                </p>
              </div>
            </div>
          </div>

          <div className="section has-text-centered">
            <a
              href="https://ko-fi.com/velddy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="button is-rounded is-large"
                style={{ color: "#fff", backgroundColor: "#649dbd" }}
              >
                <i className="fas fa-coffee"></i> &nbsp; Buy me a coffee
              </div>
            </a>
          </div>
        </div>

        <FooterComponent />
      </div>
    )
  }
}
