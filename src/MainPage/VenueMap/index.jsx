// @flow
import React, { Fragment, useState, useEffect } from "react";
import type { Element } from "react";

import ReactMapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import assign from "lodash/assign";
import debounce from "lodash/debounce";

import "./index.css";

const VenueMap = (): Element<typeof Fragment> => {
  type viewportType = {
    width: string,
    height: string,
    latitude: number,
    longitude: number,
    zoom: number
  };
  const [viewport, setViewport] = useState<viewportType>({
    width: "100%",
    height: "385px", // use calc to make map fill whole page minus footer+header
    latitude: 38.92201,
    longitude: -77.23312,
    zoom: 16
  });
  useEffect(() => {
    // Automatically resizes the map when size is changed horizontally.
    const handleResize: ((viewportType) => void) => void = debounce(
      function onResize() {
        setViewport(
          assign({}, viewport, {
            width: window.innerWidth
          })
        );
      }
    );
    window.addEventListener("resize", handleResize, 100);
    return function cleanup() {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      <a className="anchor" id="map">
        Map
      </a>
      <section className="green map">
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={
            "pk.eyJ1IjoidmFydW4xNDcwIiwiYSI6ImNqc2FzcTg0dDAxeDc0NG9hdnl2ZW96ajAifQ.tm0RFQRooHhcpOKw9lL_9g"
          }
          mapStyle={"mapbox://styles/varun1470/cjsaupmju0by11fpkprq5prse"}
          onViewportChange={viewport => setViewport(viewport)}
        >
          <Marker latitude={38.92201} longitude={-77.23312}>
            <h3
              style={{
                color: "#64D861"
              }}
            >
              Cvent
            </h3>
          </Marker>
        </ReactMapGL>
        <div
          className="info-circle"
          id="map-info"
          style={{
            transform: "matrix(1, 0, 0, 1, 0, 0)"
          }}
        >
          <div className="info-container">
            <h6>Cvent</h6>
            <div className="address">1765 Greensboro Station Pl</div>
            <div className="address">McLean, VA</div>
            <a
              className="button small"
              style={{ width: "60%" }}
              href="https://www.cvent.com/en/contact/directions-to-cvent"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text">Get Directions</div>
              <div className="icon icon-caret-right"></div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default VenueMap;
