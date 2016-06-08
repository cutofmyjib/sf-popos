import React, { Component } from 'react';

export default class PopoViewHeader extends Component {
  render() {
    return (
        <header>
          <h1 className="header-title">{this.props.name}</h1>
          <p>{this.props.location}</p>
        </header>
    )
  }
}