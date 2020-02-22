import * as React from "react";
import { Link } from "@reach/router";
import { Color, Button, Container } from "@veld/components";
import { Logo } from "./logo";
import { NavbarBurger } from "./navbar-burger";

interface Props {
  isLocked?: boolean;
}

interface State {
  toggled: boolean;
}

export default class Navbar extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false
    };
    this.toggle = this.toggle.bind(this);
  }

  getActive(base) {
    if (this.state.toggled) {
      return `${base} is-active`;
    }
    return base;
  }

  render() {
    return (
      <React.Fragment>
        {this.props.isLocked ? (
          <div
            style={{
              marginTop: "40px"
            }}
          />
        ) : null}
        <div
          className={"navbar" + (this.props.isLocked ? " is-fixed-top" : "")}
        >
          <Container>
            <NavbarBurger toggled={this.state.toggled} onClick={this.toggle} />
            <div className="navbar-brand is-hidden-touch">
              <a className="navbar-item" href="/">
                <Logo MainColor="#1d1c21" AccentColor="#2ea7e6" Size="2rem" />
              </a>
            </div>
            <div className={this.getActive("navbar-menu")}>
              <div className="navbar-end rounded-bottom has-background-white">
                <NavbarItem href="/commands">
                  <b>Commands</b>
                </NavbarItem>
                <NavbarItem href="/about">
                  <b>About</b>
                </NavbarItem>
                <NavbarItem href="/donate">
                  <b>Donate</b>
                </NavbarItem>
                <NavbarItem href="/guides">
                  <b>Guides</b>
                </NavbarItem>
                <NavbarItem href="https://blog.miki.ai/">
                  <b>Blog</b>
                </NavbarItem>
                <NavbarItem href="/invite?ref=mikiai">
                  <Button value="Invite" color={Color.PRIMARY} />
                </NavbarItem>
              </div>
            </div>
          </Container>
        </div>
      </React.Fragment>
    );
  }

  toggle() {
    this.setState({
      toggled: !this.state.toggled
    });
  }
}

interface NavbarItemProps {
  href: string;
}

class NavbarItem extends React.Component<Partial<NavbarItemProps>> {
  render() {
    if (this.props.href.startsWith("http")) {
      return (
        <a href={this.props.href} className="navbar-item">
          {this.props.children}
        </a>
      );
    } else {
      return (
        <Link to={this.props.href} className={"navbar-item"}>
          {this.props.children}
        </Link>
      );
    }
  }
}
