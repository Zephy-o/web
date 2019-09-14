import * as React from "react";

export enum Type {
    PRIMARY,
    LINK,
    INFO,
    SUCCESS,
    WARNING,
    DANGER,
    WHITE,
    BLACK,
    LIGHT,
    DARK
}

export enum Size {
    SMALL,
    NORMAL,
    LARGE
}

function typeCSSValue(type: Type): string {
    if(type == null) {
        return "";
    }
    return "is-" + Type[type].toLowerCase();
}

function sizeCSSValue(size: Size): string {
    switch(size) {
        case Size.SMALL: 
            return "is-small";
        default: 
        case Size.NORMAL: 
            return "";
        case Size.LARGE: 
            return "is-large";
    }
}

export class Button extends React.Component<ButtonProps> {
    public static defaultProps = {
        href: "",
        type: Type.PRIMARY,
        size: Size.NORMAL,
        icon: null,
        isRounded: false,
        isOutlined: false
    };

    constructor(props) {
        super(props);
    }

    render() {
        let iconDiv;
        if(this.props.icon != null)
        {
            iconDiv = (
                <span className="icon">
                    <i className={this.props.icon}></i>
                </span>
            )
        }

        return (
            <a  className={"button" 
                         + " " + sizeCSSValue(this.props.size) 
                         + " " + typeCSSValue(this.props.type)
                         + (this.props.isRounded ? " is-rounded" : "")
                         + (this.props.isOutlined ? " is-outlined" : "")} 
                href={this.props.href}>
                {iconDiv}
                <span>
                    {this.props.value}
                </span>
            </a>
        )
    }
}

interface ButtonProps {
    icon: string
    size: Size
    type: Type
    value: string
    href: string
    isRounded: boolean
    isOutlined: boolean
}

export default Button;