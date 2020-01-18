import React, {Component} from 'react';
import './index.css';

class Intro extends Component {
  render() {
    return (<>
      <a className="anchor" id="intro"></a>
      <section className="intro">
        <div className="container">
          <div className="animation-container vertical left top extra-height" id="trigger">
            <div className="animated"></div>
          </div>
          <p className="large">Do you get excited watching your ideas come to life? Ever wanted to build the next Snapchat or create an Amazon Alexa skill? Program a drone? Create programs using the latest machine learning or virtual reality technology? Come to HackTJ to make new friends, build mind-blowing projects, attend workshops to learn new tricks, and have a fantastic time!</p>
        </div>
      </section>
    </>);
  }
}

export default Intro;
