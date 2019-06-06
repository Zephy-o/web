import * as React from "react"
import { RouteComponentProps } from "@reach/router";

export default class Donate extends React.Component<RouteComponentProps> {
    render() {
        return <div className="section hero is-medium is-textured">
            <div className="container content">
                <h1 className="has-text-light">Feeling generous</h1>
                <p className="has-text-light">Miki is a bot that is growing very fast, and to maintain a bot this big I have to take a lot of time from my daily life and focus on improving Miki for you all to enjoy.</p>
            </div>
        </div>
    }
}