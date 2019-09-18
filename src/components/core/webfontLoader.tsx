import * as React from 'react';

interface WebfontLoaderProps {
    fonts: Array<string>;
}

interface WebfontLoaderState {
    isHttps: boolean;
}

class WebfontLoader extends React.Component<WebfontLoaderProps, WebfontLoaderState> {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.setState({
            isHttps: document.location.protocol == "https"
        });
    }

    getProtocol() {
        return this.state.isHttps ? "https" : "http";
    }

    render() {
        return <React.Fragment>
            <script async src={`${this.getProtocol()}://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js`}>
            </script>
            {/* <script>
                {WebFont.load({
                    google: {
                    families: ['Droid Sans', 'Droid Serif']
                    }
                });}
            </script> */}
        </React.Fragment>
    }
}