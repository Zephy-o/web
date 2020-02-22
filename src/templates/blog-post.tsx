/* eslint-disable react/prop-types */
import React from "react";
import { graphql } from "gatsby";
import { Container, Button, Color, Size } from "@veld/components";
import { Head } from "../components/head";
import Navbar from "../components/navbar";
import { TwitterShareButton } from "../components/share-buttons/twitter-share-button";
import { AuthorCard } from "../components/cards/author-card";
import { GuideAddMikiSection } from "../components/sections/guide-add-miki-section";
import { FooterComponent } from "../components/footer";

interface Author {
  name: string;
  title: string;
  avatar: string;
}

interface Props {
  title: string;
  authors: Author[];
  date: string;
  readingTimeMinutes: string;
  html: string;
}

export class BlogPost extends React.Component<Props> {
  location: string;

  constructor(props: Props) {
    super(props);
    this.location = "";
  }

  componentDidMount() {
    this.location = window.location.href;
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Head />
        <Navbar />
        <Container>
          <br />
          <div
            className="content"
            style={{
              paddingTop: "1rem"
            }}
          >
            <h1>{this.props.title}</h1>
            <p className="has-text-grey-light">
              {this.props.readingTimeMinutes} minute read
            </p>
          </div>
          <div className="level">
            <div className="level-right">
              <div className="level-item">
                <AuthorCard
                  name={this.props.authors[0].name}
                  title={new Date(this.props.date).toDateString()}
                  avatarUrl={this.props.authors[0].avatar}
                />
              </div>
            </div>
            <div
              className="level-left"
              style={{
                padding: "0.5rem"
              }}
            >
              <div className="level-item">
                <TwitterShareButton
                  text={`Read this article about ${this.props.title} by ${
                    this.props.authors[0].name.split("#")[0]
                  }`}
                  url={this.location}
                />
              </div>
            </div>
          </div>
          <hr />

          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: this.props.html }}
          ></div>

          <div className="is-flex">
            {this.props.authors.map((author, index) => {
              return (
                <AuthorCard
                  key={index}
                  name={author.name}
                  title={author.title}
                  avatarUrl={author.avatar}
                />
              );
            })}
          </div>
        </Container>

        <GuideAddMikiSection />
        <div className="section hero is-small is-dark">
          <div className="hero-body">
            <Container>
              <h2 className="title">
                <i className="fad fa-comment-dots"></i> Still not sure about a
                feature?
              </h2>
              <p className="subtitle">
                {" "}
                Join the Miki server and let our experienced Miki volunteers and
                developers assist you!
              </p>
              <Button
                className="seperated"
                href="/invite?ref=miki_ai"
                size={Size.LARGE}
                color={Color.INFO}
                value="Get support"
                icon="fab fa-discord"
              />
              <Button
                className="seperated"
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
    );
  }
}

// eslint-disable-next-line react/display-name
export default ({ data }) => {
  const post = data.markdownRemark;
  console.log(post);
  return (
    <BlogPost
      title={post.frontmatter.title}
      authors={post.frontmatter.authors}
      date={post.frontmatter.date}
      readingTimeMinutes={post.timeToRead}
      html={post.html}
    />
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        authors {
          name
          title
          avatar
        }
        thumbnailUrl
        date
      }
      timeToRead
    }
  }
`;
