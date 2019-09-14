import * as React from "react";

export class FooterComponent extends React.Component {
    render() {
        return <footer className="footer has-background-white-ter">
            <div className="container">
                <div className="columns is-mobile">
                    <div className="column">
                        <b>Miki</b>
                        <ul>
                            <li>
                                <a href="https://blog.miki.ai/">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="https://suggestions.miki.ai">
                                    Feedback
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/velddev/Miki/wiki/">
                                    Wiki
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="column">
                        <b>Legal</b>
                        <ul>
                            <li>
                                <a href="/legal">
                                    Service Agreement
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="column">
                        <b>Contact</b>
                        <ul>
                            <li>
                                <a href="mailto:velddev@gmail.com">
                                    Email
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="https://twitter.com/miki_discord">
                                    Twitter
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="https://github.com/mikibot">
                                    GitHub
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="column">
                        <b>More</b>
                        <ul>
                            <li>
                                <a href="/invite?ref=miki_ai">
                                    Invite
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="https://github.com/mikibot/bot/issues">
                                    Bugs
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="https://patreon.com/mikibot">
                                    Patreon
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="https://discord.gg/39Xpj7K">
                                    Support Server
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </footer>
    }
}