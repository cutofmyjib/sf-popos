import React, { Component } from 'react';
import Loading from './Loading';

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "loading"
    };
  }

  initMap() {
    var myLatLng = {lat: this.props.lat, lng: this.props.long};
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
      center: myLatLng,
      scrollwheel: false,
      zoom: 16
    });

    // Create a marker and set its position.
    var marker = new google.maps.Marker({
      map: map,
      position: myLatLng,
      title: 'Hello World!'
    });
  }

  componentDidMount() {
    this.initMap()
    this.setState({ status: "success" })
  }

  render() {
    return (
      <div id="map"></div>
    );
  };
}