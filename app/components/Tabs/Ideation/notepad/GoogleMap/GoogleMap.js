import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from "react";


export class MapContainer extends React.Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: ("AIzaSyA4fV0Hn5X716t6h44JYoJPia0UoYvgCeo")
})(MapContainer)