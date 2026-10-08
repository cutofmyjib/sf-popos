import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const SF_CENTER = [37.789, -122.401];

function coordinates(space) {
  if (!space || ['number', 'string'].indexOf(typeof space.lat) === -1 ||
      ['number', 'string'].indexOf(typeof space.long) === -1 ||
      String(space.lat).trim() === '' || String(space.long).trim() === '') {
    return null;
  }

  const lat = Number(space.lat);
  const lng = Number(space.long);
  if (!isFinite(lat) || !isFinite(lng) || Math.abs(lat) > 90 || Math.abs(lng) > 180) {
    return null;
  }
  return [lat, lng];
}

function popup(space) {
  const content = document.createElement('div');
  const name = document.createElement('strong');
  name.textContent = space.name || 'Public open space';
  content.appendChild(name);

  if (space.location) {
    const address = document.createElement('p');
    address.textContent = space.location;
    content.appendChild(address);
  }

  if (space.id !== undefined && space.id !== null) {
    const link = document.createElement('a');
    const path = `/popos/${encodeURIComponent(space.id)}`;
    link.href = path;
    link.textContent = 'View details';
    link.addEventListener('click', (event) => {
      if (event.button !== 0 || event.ctrlKey || event.metaKey ||
          event.shiftKey || event.altKey) {
        return;
      }
      event.preventDefault();
      browserHistory.push(path);
    });
    content.appendChild(link);
  }

  return content;
}

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.setContainer = this.setContainer.bind(this);
  }

  componentDidMount() {
    this.map = L.map(this.container, { scrollWheelZoom: false }).setView(SF_CENTER, 14);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    this.markers = L.featureGroup().addTo(this.map);
    this.updateMarkers();
  }

  componentDidUpdate(previousProps) {
    if (previousProps.spaces !== this.props.spaces) {
      this.updateMarkers();
    }
  }

  componentWillUnmount() {
    this.map.remove();
  }

  setContainer(container) {
    this.container = container;
  }

  updateMarkers() {
    this.markers.clearLayers();
    this.props.spaces.forEach((space) => {
      const point = coordinates(space);
      if (!point) {
        return;
      }
      L.marker(point, {
        icon: L.divIcon({
          className: 'popos-map-marker',
          iconSize: [20, 20],
          iconAnchor: [10, 10],
          popupAnchor: [0, -10]
        }),
        title: space.name || 'Public open space'
      }).bindPopup(popup(space)).addTo(this.markers);
    });

    if (this.markers.getLayers().length) {
      this.map.fitBounds(this.markers.getBounds(), { padding: [30, 30], maxZoom: 16 });
    } else {
      this.map.setView(SF_CENTER, 14);
    }
  }

  render() {
    return (
      <div
        className="popos-map"
        role="region"
        aria-label={this.props.label}
        ref={this.setContainer}
      />
    );
  }
}

Map.propTypes = {
  spaces: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired
};
