import React, {Component} from 'react';
import './index.css';

class FAQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAnswer: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const {showAnswer} = this.state;
    this.setState(state => ({
      showAnswer: !showAnswer
    }));
  }

  render() {
    return (<li className={`question-group ${this.state.showAnswer
        ? 'is-open'
        : ''}`}>
      <h3 className={`question ${this.props.small
          ? 'small'
          : ''}`} onClick={this.onClick}>{this.props.question}<div className="icon icon-plus"></div>
        <div className="icon icon-close"></div>
      </h3>
      <div className="answer" style={{
          height: this.state.showAnswer
            ? '100%'
            : 0
        }}>
        <p>{this.props.answer}</p>
      </div>
    </li>);
  }
}

export default FAQuestion;
