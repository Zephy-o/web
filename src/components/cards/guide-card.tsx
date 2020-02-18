import * as React from 'react';

export class GuideCard extends React.Component<Partial<GuideCardProps>> {
    constructor(props: GuideCardProps) {
        super(props);

        this.renderAsURL = this.renderAsURL.bind(this);
        this.renderBase = this.renderBase.bind(this);
    }
    
    render() {
        if(this.props.href != undefined) {
            return this.renderAsURL();
        }
        return this.renderBase();
    }

    renderAsURL() {
        return (
            <a href={this.props.href}>
                {this.renderBase()}
            </a>
        )
    }

    renderBase() {
        return (
            <div className="card">
                <div className="card-content content">
                    <h4>{this.props.title || "No title set?"}</h4>
                    <p>{this.props.excerpt}</p>
                    {this.props.tags.map((x, index) => {
                        return (<p key={index} className="tag" style={{marginRight: "0.5rem"}}>{x}</p>)
                    })}
                    <p><i className="fad fa-at has-text-primary" style={{
                        marginRight: "0.5rem"
                    }}/>
                    {this.props.authors[0]} - {new Date(this.props.date).toDateString()}</p>
                </div>
            </div>
        );
    }
}

interface GuideCardProps {
    title: string;
    authors: string[];
    image: string;
    new: boolean;
    date: string;
    href?: string;
    tags: string[];
    excerpt: string;
}