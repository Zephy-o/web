import * as React from 'react';

interface Props {
    fill: string;
}

export class Wave extends React.Component<Props> {
    render() {
        return (
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 1440 68" 
                    enableBackground="new 0 0 1440 68"
                    style={{
                        display: "block",
                        verticalAlign: "bottom",
                        marginBottom: "0px",
                        paddingBottom: "0px",
                        color: "white"
                    }}>
                    <path d="m1622.3 1937.7c0 0-410.7 169.1-913.4 75.5-502.7-93.6-977.7 56.3-977.7 56.3v440h1891.1v-571.8" fill={this.props.fill} transform="translate(0-1977)"></path>
                </svg>                
            </div> 
        )
    }
}