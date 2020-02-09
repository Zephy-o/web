import * as React from 'react';
import { Button, Size } from '@veld/components';
import copy from 'copy-to-clipboard';

interface Props {
    value: string;
}

interface State {
    hasCopied: boolean;
}

export class CodeBlock extends React.Component<Props, State> {
    codeRef: React.Ref<{}>;
    timeoutHandle: NodeJS.Timeout;

    constructor(props: Props) {
        super(props);
        this.state = {
            hasCopied: false
        };
        this.onClickCopy = this.onClickCopy.bind(this);
        this.codeRef = React.createRef();
    }

    onClickCopy() {
        if(this.timeoutHandle != undefined) {
            clearTimeout(this.timeoutHandle);
        }

        copy(this.props.value);
        this.setState({hasCopied: true});
        this.timeoutHandle = setTimeout(() => {
            this.setState({hasCopied: false});
            this.timeoutHandle = undefined;
        }, 3000);
    }
    
    render() {
        return (
            <div style={{
                boxSizing: "inherit",
            }}>
                <span className="is-overlay" style={{
                    backgroundColor: this.state.hasCopied ? "grey" : null,
                    zIndex: this.state.hasCopied ? 1 : -1,
                    opacity: this.state.hasCopied ? 1 : 0,
                    transition: "0.1s",
                    textAlign: "center"
                }}>
                    Copied!
                </span>
                <pre className="is-relative" style={{
                    position: "relative",
                    width: "100%",
                    borderRadius: "4px"
                }} onClick={this.onClickCopy}>
                    {this.props.value}
                </pre>
            </div>
        );
    }
}