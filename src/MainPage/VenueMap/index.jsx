import React, {Component} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import assign from 'lodash/assign';
import debounce from 'lodash/debounce';
import './index.css';

class VenueMap extends Component {
  state = {
    viewport: {
      width: "100%",
      height: 385,
      latitude: 38.818,
      longitude: -77.17,
      zoom: 16
    }
  };

  componentDidMount() {
    // Automatically resizes the map when size is changed horizontally.
    window.addEventListener('resize', debounce(function onResize() {
      this.setState({viewport: assign({}, this.state.viewport, {width: window.innerWidth})});
    }.bind(this)), 100);
  }

  render() {
    return (<>
      <a className="anchor" id="map"></a>
      <section className="green map">
        <ReactMapGL {...this.state.viewport} mapboxApiAccessToken={'pk.eyJ1IjoidmFydW4xNDcwIiwiYSI6ImNqc2FzcTg0dDAxeDc0NG9hdnl2ZW96ajAifQ.tm0RFQRooHhcpOKw9lL_9g'} mapStyle={'mapbox://styles/varun1470/cjsaupmju0by11fpkprq5prse'} onViewportChange={(viewport) => this.setState({viewport})}>
          <Marker latitude={38.818} longitude={-77.17}>
            <h3 style={{
                'color' : '#64D861'
              }}>TJHSST</h3>
          </Marker>
        </ReactMapGL>
        <div className="info-circle" id="map-info" style={{
            transform: 'matrix(1, 0, 0, 1, 0, 0)'
          }}>
          <div className="info-container">
            <h6>TJHSST</h6>
            <div className="address">6560 Braddock Road</div>
            <div className="address">Alexandria, VA</div>
            <a className="button small" href="https://www.google.com/maps/place/Thomas+Jefferson+High+School+for+Science+and+Technology/@38.8185004,-77.1708548,17z/data=!3m1!4b1!4m2!3m1!1s0x89b7b2e02877e895:0xc12f564af4d3bcab" target="_blank" rel="noopener noreferrer">
              <div className="text">Get directions</div>
              <div className="icon icon-caret-right"></div>
            </a>
          </div>
        </div>
      </section>
    </>);
  }
}

export default VenueMap;
