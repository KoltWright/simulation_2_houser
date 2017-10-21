import React, {Component} from 'react';


import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div id="nav-container">
        <div id="navbar-left">
        <img id="small-house" src="houserLogoSmall.png" />
        <span>Houser</span>
        <span>Dashboard</span>
        </div>
        <div>
          <span>Logout</span>
        </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;
