import React, { Component } from 'react'
import LocationAutoComplete from '../buttons/LocationAutocomplete'
import apiHandler from "../../api/apiHandler";
import TextField from '@material-ui/core/TextField';

export default class SearchPlace extends Component {

    state = {
        location: {},
      };

      handlePlace = (place) => {
        const newPlace = {
          type: place.geometry.type,
          coordinates: place.geometry.coordinates,
          formattedAddress: place.place_name,
        };
        this.setState({ location: newPlace });
      };


    render() {
        return (
          <>
            <div>               
            <LocationAutoComplete onSelect={this.handlePlace}/>
        
            </div>
            </>
        )
    }
}
