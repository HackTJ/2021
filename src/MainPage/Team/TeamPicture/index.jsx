import React, { Component } from "react";
import Figure from "react-bootstrap/Figure";
import "./index.css";

class TeamPicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAbout: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { showAbout } = this.state;
    this.setState(state => ({
      showAbout: !showAbout
    }));
  }

  render() {
    return (
      <li className={`question-group ${this.state.showAbout ? "is-open" : ""}`}>
        <Figure className="figure fade question" onClick={this.onClick}>
          <Figure.Image
            alt={this.props.name}
            src={this.props.image}
            className="img"
            thumbnail={true}
          />
          <Figure.Caption className="figcaption">
            {this.props.name}
          </Figure.Caption>
        </Figure>
        <div
          className="answer"
          style={{
            height: this.state.showAbout ? "100%" : 0
          }}
        >
          <p>{this.props.about}</p>
        </div>
      </li>
    );
  }
}

export default TeamPicture;
