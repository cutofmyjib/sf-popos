import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Popo extends Component {
  render() {
    var snippet = this.props.snippet
    if(snippet) {
      snippet = snippet.slice(0, 50) + '...'
    }
    return (
      <li className="popo">
        <Link to={`popos/${this.props.id}`}>
          <img className="popo-img" src={this.props.headerImg} />
        </Link>
        <div className="popo-subcontainer">
          <h2><Link to={`popos/${this.props.id}`}>{this.props.name}</Link></h2>
          <div className="popo-detail-div">
            <i className="material-icons">location_on</i>
            <p>{this.props.location}</p>
          </div>
          <div className="popo-detail-div">
            <i className="material-icons">schedule</i>
            <p>{this.props.hours}</p>
          </div>
          <p>{snippet}</p>
        </div>
      </li>
    );
  }
};
