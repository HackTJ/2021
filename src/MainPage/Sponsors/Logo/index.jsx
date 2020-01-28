import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import "./index.css";

class Logo extends Component {
  render() {
    return (
      <>
        <a
          href={this.props.url}
          target="_blank"
          rel="noopener noreferrer"
          data-tip="data-tip"
          data-for={this.props.name}
        >
          <img src={this.props.logo} alt={this.props.name} />
        </a>
        <ReactTooltip
          id={this.props.name}
          place="top"
          type="dark"
          effect="solid"
        >
          {/* tooltip content */}
          {this.props.name}
        </ReactTooltip>
      </>
    );
  }
}

export default Logo;
