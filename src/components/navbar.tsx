import * as React from "react";
import { Link } from "@reach/router";
import { Container } from "@veld/components";

export interface NavbarProps {
    className: string;
}

export interface NavbarState {
    active: boolean;
}

export default class Navbar<Props extends NavbarProps, State extends NavbarState> extends React.Component<Props, State> {
    public static defaultProps = {
        className: "",
    };

    constructor(props) {
        super(props);
        this.state = ({
            active: false
        } as State);
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
        return <React.Fragment>
            <div className="navbar-space"></div>
                {this.renderNavbar()}
        </React.Fragment>
    }

    renderNavbar() {
        return (
            <div className={`navbar ${this.getNavbarClass()}`} id="global-nav-bar">
                <Container>
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
                            <NavbarItem href="/guides" value="Guides" />
                            <NavbarItem href="https://blog.miki.ai/" value="Blog" />
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}

interface NavbarItemProps {
    href: string;
    value: string;
    icon: string;
}

class NavbarItem extends React.Component<Partial<NavbarItemProps>> {
    render() {
        if(this.props.href.startsWith("http"))
        {
            return <a href={this.props.href} className="navbar-item" >
                {this.renderIcon()}
                <p>{this.props.value}</p>
            </a>
        } else {
            return <Link to={this.props.href} className="navbar-item" >
                {this.renderIcon()}
                <p>{this.props.value}</p>
            </Link>
        }
    }

    renderIcon() {
        if(this.props.icon != null) {
            return (
                <span className="icon">
                    <i className="fa"/>
                </span>
            )
        }
        return <React.Fragment/>;
    }
}