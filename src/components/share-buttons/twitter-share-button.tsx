import * as React from 'react';

interface Props {
    text: string;
    url: string;
    via?: string;
}

const TWITTER_URL = "https://twitter.com/share";

export class TwitterShareButton extends React.Component<Props> {
    constructor(props: Props) {
        super(props);

        this.getVia = this.getVia.bind(this);
    }

    render() {
        return (
            <a target="_blank" 
            rel="noopener noreferrer"
            href={`${TWITTER_URL}?text=${this.props.text}&url=${this.props.url}${this.getVia()}`}
            className="share-button">
            <i className="fab fa-2x fa-twitter-square" style={{
                padding: "0.5rem"
            }}/>
        </a>
        )
    }

    getVia() {
        if(this.props.via != null) {
            return `&via=${this.props.via}`;
        }
        return "";
    }
}