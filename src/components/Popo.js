import React, { Component } from 'react';

export default class Popo extends Component {
  componentDidMount() {
    //ajax
  }
  render() {
    return (
      <li className="popo">
        <a href="#"><img className="popo-img" src={this.props.url[0]} /></a>
        <div className="popo-subcontainer">
          <h2><a href="#">{this.props.name}</a></h2>
          <p>{this.props.location}</p>
          <p>{this.props.description}</p>
        </div>
      </li>
    );
  }
};
