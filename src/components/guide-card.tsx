import * as React from 'react';

export class GuideCard extends React.Component<Partial<GuideCardProps>> {
    constructor(props: GuideCardProps) {
        super(props);
    }
    
    render() {
        return (
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={this.props.image} alt={this.props.title}/>>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="seperated-h tag is-info">New!</div>
                    <b>{this.props.title || "No title set?"}</b>
                    <i><br/> By {this.props.authors.join(", ")}</i>
                </div>
            </div>
        );
    }
}

interface GuideCardProps {
    title: string,
    authors: string[],
    image: string
    new: bool
}