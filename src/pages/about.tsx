import * as React from "react";
import { RouteComponentProps } from "@reach/router";
import NavbarComponent from "../components/navbar";
import { FooterComponent } from "../components/footer";
import devs from "../data/devs";
import discordStaff from "../data/staff";
import contributers from "../data/contributers";
import { AlumniCard } from "../components/cards/alumni-card";
import { Head } from "../components/head";
import { StaffCard } from "../components/cards/staff-card";

export default class About extends React.Component<RouteComponentProps> {
  render() {
    return (
      <div>
        <Head />
        <NavbarComponent />
        <div className="section hero is-medium is-primary">
          <div className="container content">
            <h1 className="has-text-light">So, what's Miki?</h1>
            <p className="has-text-white">
              Miki is a bot that focuses on community related events.She can do
              anything from playing games with you, to showing you progress, and
              of course with memes. She has a little bit of everything and all
              features are made by hand by yours truly. Her design is
              completely original, and a lot of thought went into hers.
            </p>
          </div>
        </div>
        <div>
          <section className="section content container has-text-centered">
            <h2 className="nm">Development Team</h2>
            <p>Working on improving your Miki experience!</p>
            <div className="section columns is-multiline is-flex is-flex-centered">
              {devs.map((value, key) => {
                return (
                  <StaffCard
                    isRounded
                    key={key}
                    name={value.name}
                    title={value.desc}
                    userId={value.uid}
                  >
                    <div className="columns has-text-centered is-mobile">
                      {value.github ? (
                        <div className="column">
                          <a
                            className="about-link"
                            href={value.github}
                            target="_blank noreferrer"
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
                            target="_blank noreferrer"
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
                            target="_blank noreferrer"
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
                  </StaffCard>
                );
              })}
            </div>
          </section>

          <section className="section content container has-text-centered">
            <h2>Server Moderators</h2>
            <p>Keeping the support server clean!</p>
            <div className="section columns is-multiline is-flex is-flex-centered">
              {discordStaff.map((value, key) => (
                <StaffCard
                  isRounded
                  key={key}
                  name={value.name}
                  title={value.desc}
                  userId={value.uid}
                />
              ))}
            </div>
          </section>

          <section className="section content container has-text-centered">
            <h2 className="nm">Alumni</h2>
            <p>These lovely people used to help Miki in the past!</p>
            <div className="section columns is-multiline is-flex is-flex-centered">
              {contributers.map((value, index) => (
                <AlumniCard key={index} name={value} />
              ))}
            </div>
          </section>
        </div>
        <FooterComponent />
      </div>
    );
  }
}
