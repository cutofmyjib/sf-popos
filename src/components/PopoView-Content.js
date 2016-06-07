import React, { Component } from 'react';
import PopoViewContentSide from './PopoView-Content-Side';
import PopoImg from './PopoImg';

export default class PopoViewContent extends Component {
  render() {
    var sideImgHeader = this.props.data.url.shift()
    var imgList = this.props.data.url.map(function(url) {
      return <PopoImg url={url}/>
    })

    return (
      <div className="popo-container">
        <aside className="side-content">
          <PopoViewContentSide  data={this.props.data}
                                sideImgHeader={sideImgHeader} />
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