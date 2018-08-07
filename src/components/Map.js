import React,{ Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {



  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };
 
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };



  
  render() {

    
      return (
     
        
        
      <Map
        google={this.props.google}
    
        initialCenter={{
          lat: 40.7128,
          lng: -74.0060
        }}
        zoom={10}
        onClick={this.onMapClicked}

      >
      <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
        <Marker
          title={'Sunshine State'}
          name={'Miami'}
          position={{lat: 25.765918, lng: -80.190422}} />
        <Marker
          name={''}
          position={{lat: 37.759703, lng: -122.428093}} />
        <Marker />
        <Marker

    
/>

    
    <InfoWindow
  onOpen={this.windowHasOpened}
  onClose={this.windowHasClosed}
  visible={this.state.showingInfoWindow}>
    <div>
      <h1>{this.state.selectedPlace.name}</h1>
    </div>
</InfoWindow>
      </Map>
      );
    }
  }
   
  export default GoogleApiWrapper({
    apiKey: ('AIzaSyCp90-rMjBwhv5ZZVteshAQmJ2n0vcOc0U')
  })(MapContainer)