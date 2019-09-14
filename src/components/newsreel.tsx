import * as React from "react"
import Ghost from "@tryghost/content-api"

const api = new Ghost({
    url: "https://blog.miki.ai",
    key: "be0d2d793e0292dda15177fc0a",
    version: "v2"
});

interface NewsReelProps {
}

interface NewsReelState {
    posts: NewsReelItem[]
}

function getTextCondensed(text: string): string {
    if(text.length < 250) {
        return text;
    }
    return text.substring(0, 250) + "...";
}

export class NewsReel extends React.Component<NewsReelProps, NewsReelState> {
    constructor(props) {
        super(props);
    
        this.componentDidMount = this.componentDidMount.bind(this);
        this.state = {
            posts: []
        }
    }

    async componentDidMount() {
        let posts = await api.posts.browse({limit: 4})
        
        this.setState({
            posts: posts.map(x => <NewsReelItem title={x.title} href={x.url} imageUrl={x.feature_image} text={getTextCondensed(x.excerpt)}/>)
        })
    }

    render() {
        return <div className="columns">
            {this.state.posts}
        </div>
    }
}

interface NewsReelItemProps {
    title: string
    text: string
    imageUrl: string
    href: string
}

export class NewsReelItem extends React.Component<NewsReelItemProps> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a className="column" href={this.props.href}>
                <div className="card">
                    { this.props.imageUrl != null ?
                    (<div className="card-image">
                            <img className="image" src={this.props.imageUrl}/>
                    </div>) : null 
                    }
                    <div className="card-content">
                        <h4>{this.props.title}</h4>
                        <p>{this.props.text}</p>
                    </div>
                </div>
            </a>
        )
    }
}

export default NewsReel