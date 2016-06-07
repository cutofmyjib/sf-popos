import React, { Component } from 'react';
import PopoViewContentMain from './PopoView-Content-Main';
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
          <PopoViewContentMain  description={this.props.data.description}
                                imgList={imgList} />
        </div>
      </div>
    )
  }
}