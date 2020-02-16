import * as React from "react"
import { RouteComponentProps } from "@reach/router"
import NavbarComponent from "../components/navbar"
import { FooterComponent } from "../components/footer"
import { Head } from "../components/head";
import { Container, Button, Size, Color } from "@veld/components"
import { GuideCard } from "../components/cards/guide-card";

export default class Donate extends React.Component<RouteComponentProps> {
  render() {
    return (
      <div>
        <Head/>
        <NavbarComponent />
        <div className="section hero is-medium is-textured is-primary">
            <div className="content">
                <Container>
                    <h1 className="title">Help & Guides</h1>
                    <p className="subtitle">
                    At Miki; we believe accessibility comes first! For this reason we've compiled some of the
                    bot's most complicated features in form of simple step by step guides for you to follow!
                    </p>
                </Container>
            </div>
        </div>
        
        <Container>
            <div className="section">
                <div className="columns">
                    <div className="column">
                        <GuideCard
                            title="Using Miki's Role Management commands!"
                            authors={[
                                "Zephy#0001", "Veld#0001"
                            ]}
                            image="https://bulma.io/images/placeholders/1280x960.png"
                            href="/guides/using-miki-role-configuration"
                            new
                            />
                    </div>

                    <div className="column">
                    </div>

                    <div className="column">
                    </div>
                </div>
            </div>
        </Container>

        <div className="section hero is-small is-dark">
            <div className="hero-body">
                <Container>
                    <h2 className="title"><i className="fad fa-comment-dots"></i> Still not sure about a feature?</h2>
                    <p className="subtitle"> Join the Miki server and 
                        let our experiences Miki volunteers and developers assist you!</p>
                    <Button className="seperated"
                        href="/invite?ref=miki_ai" 
                        size={Size.LARGE} 
                        color={Color.INFO} 
                        value="Get support"
                        icon="fab fa-discord"
                    />
                    <Button className="seperated"
                        isOutlined
                        href="https://github.com/Mikibot/bot/wiki"
                        value="Visit the wiki!"
                        size={Size.LARGE}
                        color={Color.LIGHT}
                        icon="fad fa-books"
                    />
                </Container>
            </div>
        </div>
        
        <FooterComponent />
      </div>
    )
  }
}
