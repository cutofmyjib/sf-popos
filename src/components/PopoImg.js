import React, { Component } from 'react';

export default class PopoImg extends Component {
  render() {
    return (
      <div className="content-img">
        <img className="popo-img" src={this.props.url}/>
      </div>
    );
  }
}