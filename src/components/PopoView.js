import React, { Component } from 'react';
import PopoViewHeader from './PopoView-Header';
import PopoViewContent from './PopoView-Content';
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

    return (
      <div>
        <PopoViewHeader name={this.state.data.name}
                        location={this.state.data.location} />
        <PopoViewContent data={this.state.data}/>
      </div>
    );
  }
}
