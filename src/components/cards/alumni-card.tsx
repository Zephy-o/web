import * as React from "react"

export class AlumniCard extends React.Component<AlumniCardProps> {
    constructor(props: AlumniCardProps) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div className="card column seperated">
                <p className="has-text-centered">{this.props.name}</p>
            </div>
        )
    }
}

interface AlumniCardProps {
    name: string;
}