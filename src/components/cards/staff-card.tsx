import * as React from "react";

interface Props {
  name?: string;
  title?: string;
  userId?: string;

  children?: React.ReactNode;
  isRounded?: boolean;
}

export class StaffCard extends React.Component<Props> {
  render() {
    return (
      <div
        className="card is-flex column"
        style={{
          flexDirection: "column",
          margin: "1rem",
          borderRadius: this.props.isRounded ? "5px" : "0px"
        }}
      >
        <div className="card-content has-text-centered">
          <figure className="image is-64x64" style={{ margin: "auto" }}>
            <img
              className="is-rounded"
              alt={(this.props.name || "nobody") + "'s avatar"}
              src={
                this.props.userId
                  ? `https://miki-cdn.nyc3.digitaloceanspaces.com/avatars/${this.props.userId}.png`
                  : ""
              }
            />
          </figure>
        </div>
        <div className="card-content.has-text-centered">
          <h2>{this.props.name}</h2>
          <p>{this.props.title}</p>
          {this.props.children}
        </div>
      </div>
    );
  }
}
