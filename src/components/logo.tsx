import * as React from "react";

interface Props {
  MainColor: string;
  AccentColor: string;

  Size: string;
}

export class Logo extends React.Component<Props> {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          height: this.props.Size || "2rem"
        }}
        viewBox="0 0 592.666 425.302"
      >
        <g transform="translate(-252.136 -200.863)">
          <path
            d="M-3132.661-2255.15h-100.073a34.987,34.987,0,0,0-4.461-13.957l-118.574-208.626,47.063-81.126a22.772,22.772,0,0,1,19.895-11.459,22.773,22.773,0,0,1,19.9,11.459l156.151,269.166a22.764,22.764,0,0,1,.036,23.021A22.763,22.763,0,0,1-3132.661-2255.15Z"
            transform="translate(3930.391 2801.977)"
            fill={this.props.AccentColor}
          />
          <g transform="translate(-81.745 -205.886)">
            <path
              d="M190.523,10.475a23,23,0,0,1,39.992,0l188.3,331.3a23,23,0,0,1-20,34.365H22.221a23,23,0,0,1-20-34.365Z"
              transform="translate(334.694 407.909)"
              fill={this.props.MainColor}
            />
          </g>
        </g>
      </svg>
    );
  }
}
