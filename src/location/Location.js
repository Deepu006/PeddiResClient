import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import axios from 'axios';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            stores: []
          }

        let token = sessionStorage.getItem('token');
        let config = {
        headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token
        }
        };

        let data = {
            "curr_latitude": 75.63,
            "curr_longitude": 82.91
        };
        axios.post(`http://localhost:8001/api/location/`, data, config)
      .then(res => {
        const stores = res.data;
        this.setState({ stores });
      
        })
        
        
    }   

    // componentDidMount() {

    //     let token = sessionStorage.getItem('token');
    //     let config = {
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'x-auth-token': token
    //     }
    //     };

    //     let data = {
    //         "curr_latitude": 75.63,
    //         "curr_longitude": 82.91
    //     };
    //     axios.post(`http://localhost:8001/api/location/`, data, config)
    //   .then(res => {
    //     const stores = res.data;
    //     this.setState({ stores });
    //     //this.setState({ location_json });
        
    //   })
    //   }

    
    

    displayMarkers = () => {
        console.log(this.state.stores)
        return this.state.stores.map((store, index) => {
        return <Marker key={index} id={index} position={{
        lat: store.latitude,
        lng: store.longitude
        }}
        onClick={() => console.log("You clicked me!")} />
        })
    }
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={11}
          style={mapStyles}
          initialCenter={{ lat: 43.72, lng: -79.63}}
        >
          {this.displayMarkers()}
          </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAER2Hipy8v6OpK1khTMjQgaFRNlbrwbcI'
})(MapContainer);