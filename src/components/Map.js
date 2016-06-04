import React, { Component } from 'react';

export default class Map extends Component {
  initMap() {
    var myLatLng = {lat: -25.363, lng: 131.044};

    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
      center: myLatLng,
      scrollwheel: false,
      zoom: 12
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
  }
  render() {
    console.log('MAP')
    console.log(this.props.params)

    return (
      <div id="map"></div>
    );
  }
}