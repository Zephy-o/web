import * as React from "react"
import TestimonialComponent from "../components/testimonial"
import { RouteComponentProps } from "@reach/router"
import NewsReel from "../components/newsreel"
import { FooterComponent } from "../components/footer"
import { Head } from "../components/head";
import { Button, Size, Color} from "@veld/components"
import NavbarLanding from "../components/navbarLanding"
import { Wave } from "../components/wave"

const landingImageStyle = {
  borderRadius: "15px",
}

export default class Home extends React.Component<RouteComponentProps> {
  render() {
    return (
      <div>
        <Head/>
        <NavbarLanding className="navbar is-smoother is-fixed-top"/>
        <div>
          <div className="is-textured" style={{
              paddingTop: "3rem"
            }}>
            <div className="hero is-mediumfirst is-large-mobile">
              <div className="container hero-body">
                <div className="columns is-vcentered">
                  <div className="column is-5 content">
                    <h1 className="title has-text-white is-spaced">
                      Miki for Discord
                    </h1>
                    <p className="subtitle has-text-white">
                      Your solution to a great Discord Community!
                    </p>
                      <div className="is-flex flex-row-mobile">
                        <div style={{
                          margin: "0.5rem"
                        }}>
                          <Button 
                            href="/invite?ref=miki_ai" 
                            size={Size.LARGE} 
                            color={Color.INFO} 
                            value="Invite"
                            icon="fab fa-discord"
                          />
                        </div>
                        <div style={{
                          margin: "0.5rem"
                        }}>
                          <Button
                            href="https://discord.gg/39Xpj7K"
                            size={Size.LARGE}
                            color={Color.WHITE}
                            value="Support"
                            isOutlined
                          />
                        </div>
                      </div>
                  </div>
                  <div className="column is-offset-2 is-10 is-hidden-touch is-hidden-desktop-only image">
                    <img
                      className="has-shadow is-smooth"
                      src="https://cdn.miki.ai/web/landing/landing-image.png"
                      style={landingImageStyle}
                      id="landing-img"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Wave fill="white"/>
          </div>
          <div className="section has-background-lighter container">
            <div className="has-text-centered">
              <h2 className="title is-spaced">Why pick MIKI?</h2>
              <p>
                Miki has already won the hearts of millions of people and
                continues to do so with her rich set of functions.
              </p>
            </div>
            <div className="columns section">
              <div className="column section content">
                <div className="columns">
                  <div className="column has-text-centered is-2">
                    <i className="fad fa-user fa-3x has-text-primary"></i>
                  </div>
                  <div className="column">
                    <h2>Community</h2>
                    <p>
                      Show off and customize your <b>profile</b> with our
                      extensive background collection. Unleash your inner
                      completionist by collecting all <b>50+ achievements</b>{" "}
                      and badges. Show your affection through our{" "}
                      <b>marriage system</b>, because everyone deserves a little
                      bit of love!
                    </p>
                  </div>
                </div>
              </div>
              <div className="column section content">
                <div className="columns">
                  <div className="column has-text-centered is-2">
                    <i className="fad fa-cog fa-3x has-text-primary"></i>
                  </div>
                  <div className="column">
                    <h2>Complete server control</h2>
                    <p>
                      Miki does not play around when it comes to providing
                      utility for your server. Server owners can incentivize
                      their communities by implementing <b>role rewards</b>,
                      making roles level-based, purchasable or self-assignable.
                      In addition, Miki provides a lot of moderation tools such
                      as cleaning up chats and removing unwanted users from your
                      server.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="columns section">
              <div className="column section content">
                <div className="columns">
                  <div className="column has-text-centered is-2">
                    <i className="fad fa-sparkles fa-3x has-text-primary"></i>
                  </div>
                  <div className="column">
                    <h2>Uncover Miki's potential!</h2>
                    <p>
                      Whenever you send messages, you will receive{" "}
                      <b>experience points</b> and climb the <b>leaderboards</b>
                      .In addition, you can earn currency by being active and
                      collecting daily bonuses. Furthermore, you can push your
                      luck and risk these earnings in gambling games, such as
                      blackjack, to become the richest person on the
                      leaderboards!
                    </p>
                  </div>
                </div>
              </div>
              <div className="column section content">
                <div className="columns">
                  <div className="column has-text-centered is-2">
                    <i className="fad fa-chart-line fa-3x has-text-primary"></i>
                  </div>
                  <div className="column">
                    <h2>Always improving!</h2>
                    <p>
                      Our diverse community is helping us translate Miki into
                      many languages. On top of that, with rapid development,{" "}
                      <b>new features are being released weekly</b>! Online
                      features, such as{" "}
                      <b>dashboards, profiles and configuration</b>, are in the
                      works as we speak. We are consistently probing the
                      community for more ideas and suggestions, Got a suggestion?{" "}
                      <a href="https://suggestions.miki.ai">Share</a> yours today!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section container title-wrapper has-text-centered">
            <h2 className="title is-2 light-text is-spaced">
              People love Miki!
            </h2>
            <h3 className="subtitle is-5">
              Here are some of our communities actively supporting Miki and her
              abilities to help your server
            </h3>
            <div className="section columns content-wrapper">
              <TestimonialComponent
                quote="Our server was losing its foundation until Miki came aboard, the community was united with all of its unique features and brought new friendships all-around!"
                imageURL="https://cdn.miki.ai/web/landing/guilds/guild-kibii.png"
                imageAlt="Kibii TV"
                name="bin"
              />
              <TestimonialComponent
                quote="Miki helps keep the flow of conversations going with her wide variety of fun commands in our server. She's great for small and large servers alike, providing both entertainment and utility!"
                imageURL="https://cdn.miki.ai/web/landing/guilds/guild-kong.png"
                imageAlt="Kongregation on Discord"
                name="itsn0tme"
              />
              <TestimonialComponent
                quote="With so many customizations and commands, Miki is one of the ultimate utility and fun bots we've seen. And trust me, we've gone through plenty!"
                imageURL="https://cdn.miki.ai/web/landing/guilds/guild-eso.png"
                imageAlt="ESO SQUAD"
                name="SevenFangs"
              />
            </div>
          </div>
          <div className="hero is-small has-text-centered is-textured is-dark">
            <div className="section">
              <div className="hero-body">
                <h2 className="title">Get started with MIKI</h2>
                  <Button className="seperated"
                      href="/invite?ref=miki_ai" 
                      size={Size.LARGE} 
                      color={Color.INFO} 
                      value="Invite Miki!"
                      icon="fab fa-discord"
                    />
                    <Button className="seperated"
                      href="/commands"
                      size={Size.LARGE}
                      color={Color.WHITE}
                      value="Show commands!"
                      isOutlined
                    />
              </div>
            </div>
            <Wave fill="white"/>
          </div>
          <div className="section content container">
            <h3 className="has-text-centered">Latest news!</h3>
            <div className="has-text-centered">
              <NewsReel/>
            </div>
          </div>
          <script
            type="text/javascript"
            src="https://blog.miki.ai/public/ghost-sdk.min.js"
          ></script>
        </div>
        <FooterComponent />
      </div>
    )
  }
}