import React, { Component } from "react";
import "./index.css";

class DevpostCard extends Component {
  render() {
    return (
      <div className="history-section">
        <div className="action-section">
          <img
            src={this.props.logo}
            style={{
              width: "200px",
              height: "200px"
            }}
            alt={"HackTJ " + this.props.iteration}
          />
          <div className="info-container">
            <h3 className="section-title">HackTJ {this.props.iteration}</h3>
            <h4 className="section-year">{this.props.year}</h4>
            <a
              className="altbutton"
              style={{ width: "100%" }}
              href={this.props.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              DevPost
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default DevpostCard;
