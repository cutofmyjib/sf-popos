import React, { Component } from 'react';

export default class PopoViewHeader extends Component {
  render() {
    return (
        <div className="header-div">
          <h1 className="header-title">{this.props.name}</h1>
        </div>
    )
  }
}