import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import "./index.css";

class Logo extends Component {
  render() {
    return (
      <>
        <a
          href={this.props.url}
          className="sponsor-wrapper"
          target="_blank"
          rel="noopener noreferrer"
          data-tip="data-tip"
          data-for={this.props.name}
        >
          <img
            className="sponsor-image"
            src={this.props.logo}
            alt={this.props.name}
            tintColor="#64d861"
          />
        </a>
        <ReactTooltip
          id={this.props.name}
          place="top"
          type="dark"
          effect="solid"
        >
          {this.props.name}
        </ReactTooltip>
      </>
    );
  }
}

export default Logo;
