import React, { Component } from 'react';
import Loading from './Loading';
import Header from './Header';
import Popo from './Popo';
import Map from './Map';
import firebase from 'firebase';
import { config } from './config';

firebase.initializeApp(config);

export default class Popos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      photos: []
    };
  }

  componentDidMount() {
    //subscribe to firebase - database
    //get the data and save it to photos in state
    //bind this to function
    firebase.database().ref().on('value', function(snapshot) {
      this.setState({photos: snapshot.val(), status: 'success'})
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
    var status = this.state.status;
    switch (status) {
      case 'loading':
        return <Loading />
      case 'success':
        return (
          <div>
            <section className="overview-map" aria-labelledby="overview-map-title">
              <div className="overview-map-heading">
                <h2 id="overview-map-title">Explore San Francisco's POPOS</h2>
                <p>Select a pin to see the space and open its details.</p>
              </div>
              <Map
                spaces={this.state.photos.map((space, id) => ({
                  id,
                  name: space.name,
                  location: space.location,
                  lat: space.lat,
                  long: space.long
                }))}
                label="Map of San Francisco privately owned public open spaces"
              />
            </section>
            <Header/>
            <ul className="popo-container">
              {list}
            </ul>
          </div>
        );
      default:
        return <div></div>
    }
  }
};
