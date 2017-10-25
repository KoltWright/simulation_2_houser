import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {addUserId} from '../../ducks/properties';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameInput: "",
      passwordInput: ""
    }
  }

  updateUsernameInput = (username) => {
    this.setState({usernameInput: username});
  }

  updatePasswordInput = (password) => {
    this.setState({passwordInput: password});
  }

  userLoginChk = () => {
    const {usernameInput: username, passwordInput: password} = this.state;
    axios.post('http://localhost:3005/api/auth/login', {
      username,
      password
    })
    .then(res => {
      if (res.data !== 'Unauthorized') {
        this.props.addUserId(res.data.id);
        this.props.history.push('/dashboard')
      } else {
        alert(`The Username you are trying to use does not have an account, or you miss typed you password. Please register this username, or try a different password.`);
      }
    })
    .catch(err => {
      console.log(err);
    })
  }

  resgisterUser = () => {
    const {usernameInput: username, passwordInput: password} = this.state;
    axios.post('http://localhost:3005/api/auth/register', {
      username,
      password
    })
    .then(res => {
      if (res.data !== 'This user already exists') {
        this.props.history.push('/dashboard')
      } else {
        alert(`The Username you are trying register already exists. Please try a different username.`)
      }
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div id="main-body">
        <div>
          <img src="houserLogo.png" />
        </div>
        <div>
          <h2>Username</h2>
          <input type="text" onChange={(e) => {this.updateUsernameInput(e.target.value)}}></input>
          <h2>Password</h2>
          <input type="text" onChange={(e) => {this.updatePasswordInput(e.target.value)}}></input>
        </div>
        <div>
          <button id="login-button" onClick={this.userLoginChk}>Login</button>
          <button id="register-button" onClick={this.resgisterUser}>Register</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    state
  }
}

export default connect(mapStateToProps, {addUserId})(Login);
