import * as React from "react";

interface Props {
  toggled: boolean;
  onClick: () => void;
}

export class NavbarBurger extends React.Component<Props> {
  render() {
    return (
      <button
        className={
          "navbar-burger burger-button has-text-centered" +
          (this.props.toggled ? " is-active" : "")
        }
        data-target="global-nav-menu"
        aria-label="menu"
        aria-expanded="false"
        onClick={this.props.onClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    );
  }
}
