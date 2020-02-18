import * as React from "react"
import { RouteComponentProps } from "@reach/router"
import NavbarComponent from "../components/navbar"
import { FooterComponent } from "../components/footer"
import { Head } from "../components/head";
import { Container, Button, Size, Color } from "@veld/components"
import { GuideCard } from "../components/cards/guide-card";
import { graphql } from "gatsby"

export default ({ data }) => {
    return (
        <Guides data={data.allMarkdownRemark.edges.map(x => x.node)}/>
    );
}

export const query = graphql`
query {
    allMarkdownRemark {
    edges {
        node {
            id
            frontmatter {
                title
                authors {
                    name
                    avatar
                }
                thumbnailUrl
                date(formatString: "DD MMMM, YYYY")
            }
            excerpt
        }
    }
    }
}
`

interface Props extends RouteComponentProps {
    data: any;
}

export class Guides extends React.Component<Props> {
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
                        {this.props.data.map((x, index) => {
                            if(index % 3 == 0) {
                                return <GuideCard
                                    title={x.frontmatter.title}
                                    authors={x.frontmatter.authors.map(y => y.name)}
                                    image={x.frontmatter.thumbnailUrl}
                                    href={x.href}
                                    />
                            }
                        })}
                    </div>

                    <div className="column">
                        {this.props.data.map((x, index) => {
                                if(index % 3 == 1) {
                                    return <GuideCard
                                    title={x.frontmatter.title}
                                    authors={x.frontmatter.authors.map(y => y.name)}
                                    image={x.frontmatter.thumbnailUrl}
                                    href={x.href}
                                    />
                                }
                            })}
                    </div>

                    <div className="column">
                        {this.props.data.map((x, index) => {
                                if(index % 3 == 2) {
                                    return <GuideCard
                                    title={x.frontmatter.title}
                                    authors={x.frontmatter.authors.map(y => y.name)}
                                    image={x.frontmatter.thumbnailUrl}
                                    href={x.href}
                                    />
                                }
                            })}
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
