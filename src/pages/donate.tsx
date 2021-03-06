import * as React from "react"
import { RouteComponentProps } from "@reach/router"
import NavbarComponent from "../components/navbar"
import { FooterComponent } from "../components/footer"
import { Container, Button, Size, Color } from "@veld/components"
import donate1 from "../img/donate/donate_1.png"
import donate2 from "../img/donate/donate_2.png"
import donate3 from "../img/donate/donate_3.png"
import { Head } from "../components/head";
import { Icon, IconType } from "../components/icon"

export default class Donate extends React.Component<RouteComponentProps> {
  render() {
    return (
      <div>
        <Head/>
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
        <div className="content is-large is-vcentered has-background-primary">
          <div className="container">
            <h3 className="has-text-white is-padded is-marginless">
              <Icon name="patreon" type={IconType.BRANDS}/>
              Patreon
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

          <div className="section has-text-centered">
            <Button 
              href="https://www.patreon.com/bePatron?u=2542689" 
              value="Become a patron"
              size={Size.LARGE}
              color={Color.PRIMARY}
              icon="fad fa-money-bill-wave"
            />
          </div>
        </div>
        <div className="content is-large has-background-primary is-vcentered">
          <div className="container">
            <h3 className="has-text-white is-padded is-marginless">
              <i className="fas fa-coffee seperated"></i> Ko-fi
            </h3>
          </div>
        </div>

        <div className="content">
          <Container>
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
          </Container>

          <div className="section has-text-centered">
            <Button 
              href="https://ko-fi.com/velddy" 
              value="Buy me a coffee"
              size={Size.LARGE}
              color={Color.PRIMARY}
              icon="fad fa-coffee"
            />
          </div>
        </div>

        <FooterComponent />
      </div>
    )
  }
}
