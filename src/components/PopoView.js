import React, { Component } from 'react';
import PopoImg from './PopoImg';
import Loading from './Loading';
import PopoViewHeader from './PopoView-Header';
import Map from './Map';
import firebase from 'firebase';

var config2 = {
    apiKey: "AIzaSyDj7DG7DU8QGYE7KUwYkeukOIbUrWOniFE",
    authDomain: "sf-popos.firebaseapp.com",
    databaseURL: "https://sf-popos.firebaseio.com",
    storageBucket: "",
    serviceAccount: "sf-popos-90d2b81d7ffa.json"
  };
firebase.initializeApp(config2, 'secondary');

export default class PopoView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      status: 'loading'
    };
  }

  componentDidMount() {
    //subscribe to firebase - database
    //get the data and save it to photos in state
    //bind this to function
    firebase.database().ref(this.props.params.popoId).on('value', function(snapshot) {
      this.setState({data: snapshot.val(), status: 'success'})
    }.bind(this));
  }

  componentWillUnmount() {
    //unsubscribe from firebase
    firebase.database().ref(this.props.params.popoId).off();
  }

  render() {
    var data = this.state.data;

    //async stuff
    if (!(data)) {
      return <Loading />
    }
    var firstImg = data.url.shift()
    var imgList = data.url.map(function(url) {
      return <PopoImg url={url}/>
    })

    return (
      <div>
        <PopoViewHeader name={this.state.data.name}/>
        <div className="popo-container">
          <aside className="side-content">
            <div className="side-content-subdiv">
              <div className="content-img">
                <img className="popo-img" src={firstImg}/>
              </div>
              <Map  lat={this.state.data.lat}
                    long={this.state.data.long}
              />
            </div>
          </aside>
          <div className="main-content">
            <div className="main-content-subdiv">
              <div className="main-content-description">
                <p>{this.state.data.description}</p>
              </div>
              {imgList}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
