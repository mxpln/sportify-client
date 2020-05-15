import React, { Component } from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
// import apiHandler from "../api/apiHandler";
require("dotenv").config();

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiY2FwemViaWIiLCJhIjoiY2s5emRveWVxMHlkdDNndGVpcjM5ZDNuNSJ9.RHGZkM4ZydezmApMPNj3yA",
  // center: [-0.2416815, 51.5285582],
  //   addLayer({
  // id: points,
  // // source:"" ,
  // type: circle,
  //   })
});

export default class MyMap extends Component {
  state = {
    items: [],
    center: [2.333333, 48.866667],
    zoom: 11,
    style: "mapbox://styles/mapbox/light-v9",
  };


  render() {
    const { center, zoom, style } = this.state;
    return (
      <div>
        <Map
          center={center}
          zoom={[zoom]}
          style={style}
          containerStyle={{
            height: "75vh",
            width: "100vw",
          }}
        >
          <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "marker-15" }}
          >
            {this.state.items.map((item, index) => (
              <Feature
                key={index}
                coordinates={[
                  item.location.coordinates[0],
                  item.location.coordinates[1],
                ]}
              ></Feature>
            ))}
          </Layer>
        </Map>
      </div>
    );
  }
}
