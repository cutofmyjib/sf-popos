import React, { Component } from 'react';


export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingState: "."
    };
  }

  animate() {
    this.ellipsis = setInterval(function() {
      if(this.state.loadingState.length >= 3) {
        this.setState({loadingState: "."})
      } else {
        this.setState({loadingState: this.state.loadingState += "."})
      }
    }.bind(this), 200)
  };

  componentDidMount() {
    this.animate()
  }

  componentWillUnmount() {
    clearInterval(this.ellipsis)
  }

  render() {
    return (
      <div className="status-div">
        {this.state.loadingState}
      </div>
    )
  }
}