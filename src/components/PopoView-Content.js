import React, { Component } from 'react';

export default class PopoViewContent extends Component {
  render() {
    var firstImg = data.url.shift()
    var imgList = data.url.map(function(url) {
      return <PopoImg url={url}/>
    })

    return (
      <div className="popo-container">
        <aside className="side-content">
          <div className="side-content-subdiv">
            <div className="content-img">
              <img className="popo-img" src={firstImg}/>
            </div>
            <Map  lat={this.props.data.lat}
                  long={this.props.data.long}
            />
          </div>
        </aside>
        <div className="main-content">
          <div className="main-content-subdiv">
            <div className="main-content-description">
              <p>{this.props.data.description}</p>
            </div>
            {imgList}
          </div>
        </div>
      </div>
    )
  }
}