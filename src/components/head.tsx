import * as React from 'react';
import Helmet from 'react-helmet';

interface HeadProps {
    title: string;
    children: React.ReactNode;
}

export class Head extends React.Component<Partial<HeadProps>> {
    constructor(props: HeadProps) {
        super(props);
    }

    render() {
        return (
            <Helmet>
                <title>{this.props.title || "Miki - The Discord bot!"}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width initial-scale=1 maximum-scale=1 user-scalable=no" />
                <meta name="description" content="Miki, a bot for Discord with the view to make chatting more appealing through gamification and utility!" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={this.props.title || "Miki - The Discord bot!"} />
                <meta property="og:description" content="Miki, a bot for Discord with the view to make chatting more appealing through gamification and utility!" />
                {this.props.children}
            </Helmet>
        )
    }
}