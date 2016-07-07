import React, { Component } from 'react';


export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingState: ""
    };
  }

  animate() {
    this.ellipsis = setInterval(function() {
      this.setState({loadingState: this.state.loadingState += "."})
    }.bind(this), 200)
  };

  componentDidMount() {
    this.animate()
    console.log(this.state.loadingState)
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