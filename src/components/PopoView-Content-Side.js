import React, { Component } from 'react';
import Map from './Map';

export default class PopoViewContentSide extends Component {
  render() {
    return (
      <div className="side-content-subdiv">
        <div className="content-img">
          <img className="popo-img" src={this.props.sideImgHeader}/>
        </div>
        <div className="map-container">
          <Map
            spaces={[this.props.data]}
            label={`Map of ${this.props.data.name}`}
          />
          <div className="map-subcontainer">
            <div className="popo-detail-div">
              <i className="material-icons">location_on</i>
              <p>{this.props.data.location}</p>
            </div>
            <div className="popo-detail-div">
              <i className="material-icons">schedule</i>
              <p>{this.props.data.hours}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
