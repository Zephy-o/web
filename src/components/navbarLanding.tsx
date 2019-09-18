import Navbar, { NavbarProps, NavbarState } from "./navbar";

interface NavbarLandingState extends NavbarState {
    scrollY: number;
}

export default class NavbarLanding extends Navbar<NavbarProps, NavbarLandingState> {
    constructor(props) {
        super(props);
        this.state = {
            scrollY: 0,
            ...this.state
        }

        this.getNavbarClass = this.getNavbarClass.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }
    
    getNavbarClass() {
        return this.state.scrollY > 0
            ? `navbar ${this.props.className}` 
            : `navbar ${this.props.className} is-dark navbar-large`;
    }

    handleScroll(_: Event) {
        if(this.state.scrollY == 0 && window.scrollY != 0) {
            this.setState({
                scrollY: window.scrollY
            });
        } else if(this.state.scrollY != 0 && window.scrollY == 0) {
            this.setState({
                scrollY: window.scrollY
            });
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    render() {
        return super.renderNavbar();
    }
}