import * as React from "react";
import TestimonialComponent from "../components/testimonial";
import { RouteComponentProps } from "@reach/router";
import NewsReel from "../components/newsreel";
import { FooterComponent } from "../components/footer";
import { Head } from "../components/head";
import {
  Button,
  Size,
  Color,
  Container,
  DiscordMessage,
  DiscordMessageFrame
} from "@veld/components";
import Navbar from "../components/navbar";

export default class Home extends React.Component<RouteComponentProps> {
  render() {
    return (
      <div>
        <Head />
        <div className="hero is-fullheight landing">
          <div className="hero-head">
            <Container>
              <Navbar />
            </Container>
          </div>
          <div className="hero-body">
            <Container>
              <h1
                className="title is-spaced"
                style={{
                  maxWidth: "20rem"
                }}
              >
                Why worry about your community?
              </h1>
              <p
                className="subtitle"
                style={{
                  maxWidth: "20rem"
                }}
              >
                When the solution is right in front of you
              </p>
              <div className="is-flex flex-row-mobile">
                <div className="control is-grouped">
                  <div className="field">
                    <Button
                      href="/invite?ref=miki_ai"
                      size={Size.LARGE}
                      color={Color.PRIMARY}
                      value="Get started"
                      isRounded
                    />
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
        <div className="has-background-lighter container">
          <div className="has-text-centered">
            <h2 className="title is-spaced">Why pick MIKI?</h2>
            <p>
              Miki has already won the hearts of millions of people and
              continues to do so with her rich set of functions.
            </p>
          </div>
          <div className="columns section">
            <div className="column">
              <div className="columns content">
                <div className="column has-text-centered is-2">
                  <i className="fad fa-user fa-3x has-text-primary"></i>
                </div>
                <div className="column">
                  <h2>Community</h2>
                  <p>
                    Show off and customize your <b>profile</b> with our
                    extensive background collection. Unleash your inner
                    completionist by collecting all <b>50+ achievements</b> and
                    badges. Show your affection through our{" "}
                    <b>marriage system</b>, because everyone deserves a little
                    bit of love!
                  </p>
                </div>
              </div>
            </div>
            <div className="column content">
              <DiscordMessageFrame>
                <DiscordMessage
                  username="Guy"
                  time="Right now"
                  body={"Hey look at this, I'm about to win the jackpot!"}
                  avatar="/user_1.png"
                />
                <DiscordMessage
                  username="John"
                  time="Right now"
                  body="No way. One more win and you'll beat me :("
                  avatar="/user_2.png"
                />
                <DiscordMessage
                  username="Miki"
                  isBot
                  time="Right now"
                  body='Guy has obtained the "Millionaire" achievement!'
                  avatar="/miki_avatar.png"
                />
              </DiscordMessageFrame>
            </div>
          </div>
          <div className="columns section">
            <div className="column content">
              <DiscordMessageFrame>
                <DiscordMessage
                  username="John"
                  time="Right now"
                  body={">ban @troll for spamming all our gaming channels."}
                  avatar="/user_2.png"
                />
                <DiscordMessage
                  username="Miki"
                  isBot
                  time="Right now"
                  body="Gotcha! He's gone now. I've put your reason in the audit log."
                  avatar="/miki_avatar.png"
                />
              </DiscordMessageFrame>
            </div>
            <div className="column content">
              <div className="columns">
                <div className="column has-text-centered is-2">
                  <i className="fad fa-cog fa-3x has-text-primary"></i>
                </div>
                <div className="column">
                  <h2>Complete server control</h2>
                  <p>
                    Miki does not play around when it comes to providing utility
                    for your server. Server owners can incentivize their
                    communities by implementing <b>role rewards</b>, making
                    roles level-based, purchasable or self-assignable. In
                    addition, Miki provides a lot of moderation tools such as
                    cleaning up chats and removing unwanted users from your
                    server.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="columns section">
            <div className="column content">
              <div className="columns">
                <div className="column has-text-centered is-2">
                  <i className="fad fa-sparkles fa-3x has-text-primary"></i>
                </div>
                <div className="column">
                  <h2>Uncover Miki's potential!</h2>
                  <p>
                    Whenever you send messages, you will receive{" "}
                    <b>experience points</b> and climb the <b>leaderboards</b>.
                    In addition, you can earn currency by being active and
                    collecting daily bonuses. Furthermore, you can push your
                    luck and risk these earnings in gambling games, such as
                    blackjack, to become the richest person on the leaderboards!
                  </p>
                </div>
              </div>
            </div>
            <div className="column">
              <DiscordMessageFrame>
                <DiscordMessage
                  username="Miki"
                  isBot={true}
                  time="Right now"
                  body={
                    'Guy has levelled up to level 12 and has unlocked the "Official cool guy" role!'
                  }
                  avatar="/miki_avatar.png"
                />
                <DiscordMessage
                  username="Guy"
                  isBot={false}
                  time="Right now"
                  body="Oh cool!"
                  avatar="/user_1.png"
                />
              </DiscordMessageFrame>
            </div>
          </div>
          <div className="columns section">
            <div className="column content">
              <DiscordMessageFrame>
                <DiscordMessage
                  username="Guy"
                  isBot={false}
                  time="Right now"
                  body="Sweet, the new update has some fancy new rolling system! Just what I asked for to use for my DND sessions!"
                  avatar="/user_1.png"
                />
                <DiscordMessage
                  username="Guy"
                  isBot={false}
                  time="Right now"
                  body=">roll 1d4 + 6"
                  avatar="/user_1.png"
                />
                <DiscordMessage
                  username="Miki"
                  isBot={true}
                  time="Right now"
                  body={"Guy has rolled 8 (2 + 6)"}
                  avatar="/miki_avatar.png"
                />
              </DiscordMessageFrame>
            </div>
            <div className="column">
              <div className="columns content">
                <div className="column has-text-centered is-2">
                  <i className="fad fa-chart-line fa-3x has-text-primary"></i>
                </div>
                <div className="column">
                  <h2>Always improving!</h2>
                  <p>
                    Our diverse community is helping us translate Miki into many
                    languages. On top of that, with rapid development,{" "}
                    <b>new features are being released weekly</b>! Online
                    features, such as{" "}
                    <b>dashboards, profiles and configuration</b>, are in the
                    works as we speak. We are consistently probing the community
                    for more ideas and suggestions, Got a suggestion?{" "}
                    <a href="https://suggestions.miki.ai">Share</a> yours today!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section container title-wrapper has-text-centered">
          <h2 className="title is-2 light-text is-spaced">People love Miki!</h2>
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
        <div className="container hero is-small has-text-centered is-light">
          <div className="section">
            <div className="hero-body">
              <h2 className="title">Get started with MIKI</h2>
              <Button
                className="seperated"
                href="/invite?ref=miki_ai"
                size={Size.LARGE}
                color={Color.PRIMARY}
                value="Invite Miki!"
                icon="fab fa-discord"
              />
              <Button
                className="seperated"
                href="/commands"
                size={Size.LARGE}
                color={Color.BLACK}
                value="Show commands!"
                isOutlined
              />
            </div>
          </div>
        </div>
        <div className="section content container">
          <h3 className="has-text-centered">Latest news!</h3>
          <div className="has-text-centered">
            <NewsReel />
          </div>
        </div>
        <script
          type="text/javascript"
          src="https://blog.miki.ai/public/ghost-sdk.min.js"
        ></script>
        <FooterComponent />
      </div>
    );
  }
}
