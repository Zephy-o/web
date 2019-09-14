import * as React from "react";
import { Link } from "@reach/router";
import Navbar from "./navbar";

export default class NavbarLanding extends Navbar {
    public static defaultProps = {
        className: "navbar",
        isLanding: false
    };

    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
        this.toggle = this.toggle.bind(this);
        this.getNavbarClass = this.getNavbarClass.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    
    getNavbarClass() {
        return window.scrollY > 0
            ? `navbar ${this.props.className}` 
            : `navbar ${this.props.className} is-dark navbar-large`;
    }

    componentDidMount() {
        window.addEventListener("scroll", (e) => {
            if(window.scrollY == 0) {
                this.forceUpdate();
            } else if(window.scrollY != 0) {
                this.forceUpdate();
            }
        });
    }
}