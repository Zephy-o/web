import { Button, Size, Color, Container } from "@veld/components";
import * as React from 'react';

export class GuideAddMikiSection extends React.Component {
    render() {
        return (
                <div className="section hero is-small is-light">
                    <div className="hero-body">
                        <Container>
                            <h2 className="title"><i className="icon fas fa-info"></i> Don't have Miki yet?</h2>
                            <Button className="seperated"
                                href="/invite?ref=miki_ai" 
                                size={Size.LARGE} 
                                color={Color.DARK} 
                                value="Invite Miki here!"
                                icon="fab fa-discord"
                            />
                        </Container>
                    </div>
                </div>
        );
    }
}