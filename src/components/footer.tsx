import * as React from "react";
import { Container } from "@veld/components";

export class FooterComponent extends React.Component {
    render() {
        return (
            <footer className="footer">
                <Container>
                    <div className="content columns is-mobile">
                        <div className="column is-4">
                            <p className="footer-header">More of us!</p>
                            <p className="footer-item">
                                <a href="https://suggestions.miki.ai/">
                                    Give feedback
                                </a>
                            </p>
                            <p className="footer-item">
                                <a href="https://github.com/velddev/Miki/wiki/">
                                    Learn more about Miki
                                </a>
                            </p>
                            <p className="footer-item">
                                <a href="https://blog.miki.ai/">
                                    Visit our Blog
                                </a>
                            </p>
                        </div>
                        <div className="column is-3">
                            <p className="footer-header">Stay up to date!</p>
                            <p className="footer-item">
                                <a href="http://discord.gg/miki">
                                    Discord
                                </a>
                            </p>
                            <p className="footer-item">
                                <a href="http://patreon.com/mikibot">
                                    Patreon
                                </a>
                            </p>
                            <p className="footer-item">
                                <a href="https://github.com/mikibot">
                                    GitHub
                                </a>
                            </p>
                        </div>
                        <div className="column is-4">
                            <p className="footer-header">Contact</p>
                            <p className="footer-item">
                                <a href="mailto:hello@miki.ai">
                                    Email
                                </a>
                            </p>
                            <p className="footer-item">
                                <a href="http://twitter.com/velddev">
                                    Twitter
                                </a>
                            </p>
                        </div>
                    </div>
                </Container>
            </footer>
        );
    }
}