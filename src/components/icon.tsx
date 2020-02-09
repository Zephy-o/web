import * as React from 'react';
import { Size } from '@veld/components';
import { sizeCSSValue } from '@veld/components/dist/size';

export enum IconType {
    BRANDS,
    SOLID,
    REGULAR,
    LIGHT,
    DUOTONE
}

interface Props {
    type: IconType;
    name: string;
    size?: Size;
}

function iconTypeToCss(type: IconType): string {
    switch(type) {
        case IconType.BRANDS:
            return "fab";
        default:
        case IconType.DUOTONE:
            return "fad";
        case IconType.LIGHT:
            return "fal";
        case IconType.REGULAR:
            return "far";
        case IconType.SOLID:
            return "fas";
    }
}

export class Icon extends React.Component<Props> {
    render() {
        return (
            <i className={
                iconTypeToCss(this.props.type) + " "
                + sizeCSSValue(this.props.size || Size.NORMAL) + " "
                + `fa-${this.props.name}`}
                style={{
                    padding: "1rem"
                }}/>
        );
    }
}