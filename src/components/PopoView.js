import React, { Component } from 'react';
import PopoViewContainer from './PopoView-Container';
import Loading from './Loading';
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
    var status = this.state.status;
    console.log(data)
    //switch case to render depending on state.status
    switch (status) {
      case 'loading':
        return <Loading />
      case 'success':
        return <PopoViewContainer data={this.state.data}/>
      default:
        return <div></div>
    }
  }
}
