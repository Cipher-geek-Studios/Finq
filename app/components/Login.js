// @flow
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import Radium from 'radium';
import  { connect } from 'react-redux';
import { push } from 'react-router-redux';
//Import actions
import { loginUser } from '../actions/userActions';

//Code goes here
@connect((store) => {
  return {
    user: store.login.user,
    status: store.login.status,
  }
})
@Radium
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
        logState: null
    };
  }
  render() {
    return (
      <div style={{background:'linear-gradient(#318A86, #E8CF94)', width: '100vw', height: '100vh'}}>
        <div style={[Styles.logBack]} className="ui segment">
          <div style={[Styles.logPanel]} className="ui raised center aligned segment">
            <div style={[Styles.comHead]}>Welcome to<p style={[Styles.comHep]}>FINQ</p></div>
              <form className="ui form" onSubmit={this.Login.bind(this)}>
                <div className="ui left icon input" style={[Styles.user]}><input ref="valUser" type="text"/><i className="user icon"></i></div>
                <div className="ui left icon input" style={[Styles.pass]}><input ref="valPass" type="password"/><i className="hide icon"></i></div>
                <button type="submit" style={[Styles.signIn]} className="ui button"><i className="sign in icon"></i>Sign In</button>
              </form>
          </div>
        </div>
      </div>
    )
  }
  componentDidUpdate(nextProps) {
    if (this.props.status == 'Logged in' && this.props.user == 'Roshan') {
      this.props.dispatch(push('/login'));
    }
  }
  Login(e) {
    e.preventDefault();
    var user = this.refs.valUser.value;
    var pass = this.refs.valPass.value;
    if(user != '' && pass != '' )
    {
      this.props.dispatch(loginUser(user, pass))
    }
    else {
      console.log('error');
    }
  }
}

//Radium stylesheet
var Styles = {
  logBack: {
    width: '370px',
    height: '450px',
    margin: 'auto',
    position: 'absolute',
    backgroundColor: 'transparent', //'rgba(255, 255, 255, 0.9)',
    border: '0',
    boxShadow: '0 0 0 0',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
  },
  logPanel: {
    width: '300px',
    height: '380px',
    margin: 'auto',
    position: 'absolute',
    backgroundColor: '#F46969',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
  },
  comHead: {
    fontSize: '20px',
    paddingTop: '25px',
  },
  comHep: {
    paddingTop: '0px',
    fontSize: '50px',
  },
  user: {
    marginTop: '35px',
    left: 'clear',
    height: '40px',
    width: '180px',
  },
  pass: {
    marginTop: '15px',
    height: '40px',
    width: '180px',
  },
  signIn: {
    marginTop: '30px',
    width: '180px',
    backgroundColor: '#E9E213',
  }
}

// <div>Welcome to Finq</div>
// <div className="ui input">
//   <input style={[Styles.textBox]} type="text" ref="valUser" placeholder="Username" />
//   <input style={[Styles.textBox]} type="text" ref="valPass" placeholder="Password" />
// </div>
// <button className="ui button" style={[Styles.incBtn]} onClick={this.Login.bind(this)}>Increment</button>
// <h1 className="ui header">{this.props.status} {this.props.user}</h1>
