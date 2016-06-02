import React, { Component } from 'react';
import Header from './Header';
import Popo from './Popo';
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDj7DG7DU8QGYE7KUwYkeukOIbUrWOniFE",
    authDomain: "sf-popos.firebaseapp.com",
    databaseURL: "https://sf-popos.firebaseio.com",
    storageBucket: "",
    serviceAccount: "sf-popos-90d2b81d7ffa.json"
  };
firebase.initializeApp(config);

export default class Popos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    //subscribe to firebase - database
    //get the data and save it to photos in state
    //bind this to function
    firebase.database().ref().on('value', function(snapshot) {
      this.setState({photos: snapshot.val()})
    }.bind(this));
  }

  componentWillUnmount() {
    //unsubscribe from firebase
    firebase.database().ref().off();
  }

  render() {
    var list = this.state.photos.map(function(popo, index) {
      return <Popo key={index} id={index} {...popo}/>
    });

    return (
      <div>
        <Header/>
        <ul className="popo-container">
          {list}
        </ul>
      </div>
    );
  }
};
