import * as React from "react"
import { RouteComponentProps } from "@reach/router"
import NavbarComponent from "../components/navbar"
import { FooterComponent } from "../components/footer"
import devs from "../data/devs"
import discordStaff from "../data/staff"
import contributers from "../data/contributers"

export default class About extends React.Component<RouteComponentProps> {
  render() {
    return (
      <div>
        <NavbarComponent />
        <div className="section hero is-medium is-textured">
          <div className="container content">
            <h1 className="has-text-light">So, what's Miki?</h1>
            <p className="has-text-white">
              Miki is a bot that focuses on community related events.She can do
              anything from playing games with you, to showing you progress, and
              ofcourse with memes. She has a little bit of everything and all
              features are made with hand by yours truly. Her design is
              completely original, and a lot of thought went into hers.
            </p>
          </div>
        </div>
        <div>
          <section className="section content container has-text-centered">
            <h1 className="nm">Development Team</h1>
            <p>Working on improving your Miki experience!</p>
            <div className="section columns is-multiline is-flex is-flex-centered">
              {devs.map((value, key) => {
                return (
                  <div key={key} className="card column seperated">
                    <div className="card-content has-text-centere">
                      <figure
                        className="image is-128x128"
                        style={{ margin: "auto" }}
                      >
                        <img
                          className="is-rounded"
                          src={`https://miki-cdn.nyc3.digitaloceanspaces.com/avatars/${value.uid}.png`}
                        />
                      </figure>
                    </div>
                    <div className="card-content.has-text-centered">
                      <h2>{value.name}</h2>
                      <p>{value.desc}</p>
                      <div className="columns has-text-centered is-mobile">
                        {value.github ? (
                          <div className="column">
                            <a
                              className="about-link"
                              href={value.github}
                              target="_blank"
                              rel="noopener"
                            >
                              <i
                                className="fab fa-github fa-2x"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        ) : (
                          undefined
                        )}
                        {value.twitter ? (
                            <div className="column">
                              <a
                                className="about-link"
                                href={value.twitter}
                                target="_blank"
                                rel="noopener"
                              >
                                <i
                                  className="fab fa-twitter fa-2x"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </div>
                          ) : (
                            undefined
                          )}
                          {value.twitch ? (
                            <div className="column">
                              <a
                                className="about-link"
                                href={value.twitch}
                                target="_blank"
                                rel="noopener"
                              >
                                <i
                                  className="fab fa-twitch fa-2x"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </div>
                          ) : (
                            undefined
                          )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          <section className="section content container has-text-centered">
            <h1>Server Moderators</h1>
            <p>Keeping the support server clean!</p>
            <div className="section columns is-multiline is-flex is-flex-centered">
              {discordStaff.map((value, key) => {
                return (
                  <div key={key} className="card column seperated">
                    <div className="card-content has-text-centere">
                      <figure
                        className="image is-128x128"
                        style={{ margin: "auto" }}
                      >
                        <img
                          className="is-rounded"
                          src={`https://miki-cdn.nyc3.digitaloceanspaces.com/avatars/${value.uid}.png`}
                        />
                      </figure>
                    </div>
                    <div className="card-content.has-text-centered">
                      <h2>{value.name}</h2>
                      <p>{value.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          <section className=" section content container has-text-centered">
            <h1 className="nm">Alumni</h1>
            <div className="section columns is-multiline is-flex is-flex-centered">
              {contributers.map((value, index) => {
                return (
                  <div key={index} className="card column seperated">
                    <p className="has-text-centered">{value}</p>
                  </div>
                )
              })}
            </div>
          </section>
        </div>
        <FooterComponent />
      </div>
    )
  }
}
