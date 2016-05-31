import React, { Component } from 'react';

export default class Popo extends Component {
  componentDidMount() {
    //ajax
  }
  render() {
    return (
      <div className="popo">
        <img className="popo-img" src={this.props.url[0]} />
        <div className="popo-subcontainer">
          <h3>{this.props.name}</h3>
        </div>
      </div>
    );
  }
};
