import React, {Component} from 'react';
import Navbar from '../Navbar/Navbar.js';
import {connect} from 'react-redux';
import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div id="dashboard-container">
      <Navbar />

      </div>
    )
  }
}

export default Dashboard;
