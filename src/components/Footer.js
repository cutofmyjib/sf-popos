import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <p>All images © 2016
          <a href="http://cutofmyjib.com/about"> Diana Lozano</a>.
          Information from
          <a href="http://sf-planning.org/privately-owned-public-open-space-and-public-art-popos"> SF Planning</a> and
          <a href="https://www.spur.org/sites/default/files/migrated/anchors/popos-guide.pdf"> SPUR</a>.
        </p>
        <p>Made with &hearts; by <a href="http://cutofmyjib.com">cutofmyjib</a></p>
      </footer>
    );
  }
}
