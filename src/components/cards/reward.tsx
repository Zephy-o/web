const cardStyle = { margin: "auto"}

interface RewardCardProps {
    icons: string[]
    title: string
    description: string
}

class RewardCardComponent extends React.Component<RewardCardProps> {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="section card">
            <div className="columns">
                {this.createIcon(this.props.icons)}
                <div className="column">
                    <h4>{this.props.title}</h4>
                    <p>{this.props.description}</p>
                </div>
            </div>
        </div>
    }

    createIcon(icons) { 
        if(icons.length == 0) {
            return null;
        }

        let element : React.DetailedReactHTMLElement<{className: string}, HTMLElement>;
        if(this.props.icons.length > 1) {
            var iconElements: JSX.Element[];
            for(let i in this.props.icons) {
                iconElements.push(
                    this.createIconStack(this.props.icons[i] + ` fa-stack-${i}x`));
            }

            element = React.createElement("span", 
                { className: "fa-stack fa-3x"},
                iconElements);
        } else {
            element = React.createElement(
                "i", 
                { className: this.props.icons[0] });
        }

        return <div className="column is-4 has-text-centered" style={cardStyle}>
            {element}
        </div>
    }

    createIconStack(className: string) {
        return <i className={className}></i>
    }
}