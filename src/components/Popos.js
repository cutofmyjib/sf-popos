import React, { Component } from 'react';
import Header from './Header';
import Popo from './Popo';
import firebase from 'firebase';
import { config } from './config';

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
    var list = this.state.photos.map(function(props, index) {
      return <Popo  key={index}
                    id={index}
                    headerImg={props.url[0]}
                    {...props}/>
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
