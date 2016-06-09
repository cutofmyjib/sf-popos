import React, { Component } from 'react';
import PopoViewHeader from './PopoView-Header';
import PopoViewContent from './PopoView-Content';

export default class PopoViewContainer extends Component {
  render() {
    return (
      <div>
        <PopoViewHeader name={this.props.data.name}
                        location={this.props.data.location} />
        <PopoViewContent data={this.props.data}/>
      </div>
    );
  }
}
