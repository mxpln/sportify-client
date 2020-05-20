import React, { Component } from "react";
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
// import apiHandler from "../api/apiHandler";
require("dotenv").config();
const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiY2FwemViaWIiLCJhIjoiY2s5emRveWVxMHlkdDNndGVpcjM5ZDNuNSJ9.RHGZkM4ZydezmApMPNj3yA",
});



export default class MyMap extends Component {
  state = {
    items: [],
    // lng: 2.333333,
    // lat: 48.866667,
    coordinates:[2.61570809, 47],
    zoom: 5.2,
    style: "mapbox://styles/mapbox/light-v9",
    userLocation: [],
    eventCoordinates:[],
  };


//   componentDidMount(){
//     navigator.geolocation.getCurrentPosition((position) => {
//         let lng = position.coords.longitude;
//         let lat = position.coords.latitude;
//         let res = [lng, lat]
//         console.log("res", res)
//       this.setState({
//         coordinates : res,
//         zoom:11
//       });
//     });
//   }



 componentDidUpdate(){
  if (this.props.place.coordinates !== this.state.coordinates){
    this.setState({
        coordinates:this.props.place.coordinates,
        zoom:11
    })
  }
     console.log("test", this.props)
  }


  render() {
  
    console.log("ici", this.state.coordinates)
    const { center, zoom, style } = this.state;
    return (
      <>
      
        <Map
          center={this.state.coordinates}
          zoom={[this.state.zoom]}
          style={style}
          containerStyle={{
            height: "75vh",
            width: "100vw",
          }}
          movingMethod="flyTo"
        >

        {!this.props.place ? (
            <div>
         </div>
        ) : (
         <Marker
            coordinates={this.props.place.coordinates}
            anchor="bottom"
          >
            <img className="location-icon" src="/media/marker.png" />
          </Marker>
        )}
       
        </Map>
      </>
    );
  }
}
