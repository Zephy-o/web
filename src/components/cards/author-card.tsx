import * as React from 'react';

interface AuthorCardProps {
    name: string;
    title: string;
    avatarUrl: string;
}

export class AuthorCard extends React.Component<AuthorCardProps> {
    constructor(props: AuthorCardProps) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div className="is-flex" style={{
                alignItems: "center",
                padding: "1rem"
            }}>
                <figure className="image is-48x48">
                    <img className="is-rounded" src={this.props.avatarUrl}/>
                </figure>
                <div style={{
                    padding: "1rem"
                }}>
                    <p><b>{this.props.name}</b></p>
                    <p>{this.props.title}</p>
                </div>
            </div>
        )
    }
}
