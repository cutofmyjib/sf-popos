import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <p>Photos are not mine, all of them come from several
          <a href="https://www.google.com/search?q=sf+popos&espv=2&biw=751&bih=667&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiyivmL4JzNAhUS12MKHajXCsEQ_AUIBygC#imgrc=DhgwvR-7Sl5qQM%3A"> SF POPOS websites. </a>
          Information is from
          <a href="https://www.spur.org/sites/default/files/migrated/anchors/popos-guide.pdf"> SPUR</a>
        </p>
        <p>Made with &hearts; by <a href="http://cutofmyjib.github.io/about/">cutofmyjib</a></p>
      </footer>
    );
  }
}
