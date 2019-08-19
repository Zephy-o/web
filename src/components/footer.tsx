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
            <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-j8y0ITrvFafF4EkV1mPW0BKm6dp3c+J9Fky22Man50Ofxo2wNe5pT1oZejDH9/Dt" crossOrigin="anonymous" />
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `
        {
          "@context" : "http://schema.org",
          "@type" : "SoftwareApplication",
          "name" : "MIKI",
          "image" : "https://cdn.miki.ai/branding/logo-dark@1024.png",
          "url" : "https://miki.ai/",
          "author" : {
            "@type" : "Person",
            "name" : "Mike Veldsink"
          },
          "applicationCategory" : "EntertainmentApplication",
          "downloadUrl" : "https://miki.ai/invite.html?mikiai",
          "review" : [ {
            "@type" : "Review",
            "author" : {
              "@type" : "Person",
              "name" : "Kibii TV"
            },
            "reviewBody" : "Our server was losing its foundation until Miki came aboard, the community was united with all of its unique features and brought new friendships all-around!"
          }, {
            "@type" : "Review",
            "author" : {
              "@type" : "Person",
              "name" : "Kongregation on Discord"
            },
            "reviewBody" : "Miki helps keep the flow of conversations going with her wide variety of fun commands in our server. She&#39;s great for small and large servers alike, providing both entertainment and utility!"
          }, {
            "@type" : "Review",
            "author" : {
              "@type" : "Person",
              "name" : "ESO SQUAD"
            },
            "reviewBody" : "With so many customizations and commands, Miki is one of the ultimate utility and fun bots we&#39;ve seen. And trust me, we&#39;ve gone through plenty!"
          } ]
        }
        </script>`}} />
        </footer>
    }
}