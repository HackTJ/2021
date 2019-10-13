import React, {Component} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import assign from 'lodash/assign';
import debounce from 'lodash/debounce';

class RoadMap extends Component {
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
    {/* Automatically resizes the map horizontally. */}
     window.addEventListener('resize', debounce(function onResize() {
       this.setState({
         viewport: assign({}, this.state.viewport, {
           width: window.innerWidth,
         })
       });
     }.bind(this)), 100);
   }

  render() {
    //
    return (<ReactMapGL
      {...this.state.viewport}
      mapboxApiAccessToken={'pk.eyJ1IjoidmFydW4xNDcwIiwiYSI6ImNqc2FzcTg0dDAxeDc0NG9hdnl2ZW96ajAifQ.tm0RFQRooHhcpOKw9lL_9g'}
      mapStyle={'mapbox://styles/varun1470/cjsaupmju0by11fpkprq5prse'}
      onViewportChange={(viewport) => this.setState({viewport})}
    >
      <Marker latitude={38.818} longitude={-77.17}>
        <h3 style={{'color': '#64D861'}}>TJHSST</h3>
      </Marker>
    </ReactMapGL>);
  }
}

export default RoadMap;
