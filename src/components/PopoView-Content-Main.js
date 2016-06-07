import React, { Component } from 'react';

export default class PopoViewContentMain extends Component {
  render() {

    return (
      <div className="main-content-subdiv">
        <div className="main-content-description">
          <p>{this.props.description}</p>
        </div>
        {this.props.imgList}
      </div>
    )
  }
}