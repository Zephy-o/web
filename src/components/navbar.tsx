import * as React from "react";
import { Link } from "@reach/router";

interface NavbarProps {
    className: string
}

interface NavbarState {
    active: boolean;
}

export default class Navbar extends React.Component<NavbarProps, NavbarState> {
    public static defaultProps = {
        className: "",
        isLanding: false
    };

    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
        this.toggle = this.toggle.bind(this);
        this.getNavbarClass = this.getNavbarClass.bind(this);
    }
    
    getNavbarClass() {
        return `navbar is-fixed-top has-shadow ${this.props.className}`;
    }

    toggle() {
        this.setState({
            active: !this.state.active
        })
    }
    
    getActive(base) {
        if(this.state.active)
        {
            return `${base} is-active`; 
        }
        return base;
    }

    render() {
        return <div className={`navbar ${this.getNavbarClass()}`} id="global-nav-bar">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <p className="seperated">MIKI</p>
                    </a>
                    <a className={this.getActive("navbar-burger has-text-centered")} 
                            data-target="global-nav-menu" 
                            aria-label="menu" 
                            role="button" 
                            aria-expanded="false" 
                            onClick={this.toggle}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>
                <div className={this.getActive("navbar-menu")}>
                    <div className="navbar-end">
                        <NavbarItem href="/commands" value="Commands" />
                        <NavbarItem href="/about" value="About" />
                        <NavbarItem href="/donate" value="Donate" />
                        <NavbarItem href="https://blog.miki.ai/" value="Blog" />
                    </div>
                </div>
            </div>
        </div>
    }
}

interface NavbarItemProps {
    href: string;
    value: string;
}

class NavbarItem extends React.Component<NavbarItemProps> {
    render() {
        if(this.props.href.startsWith("http"))
        {
            return <a href={this.props.href} className="navbar-item" >
                <p>{this.props.value}</p>
            </a>
        } else {
            return <Link to={this.props.href} className="navbar-item" >
                <p>{this.props.value}</p>
            </Link>
        }
    }
}