import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import Radium from 'radium';
import { push } from 'react-router-redux';
import  { connect } from 'react-redux';
import { logoutUser } from '../actions/userActions';
//Import components
import Main from './Main/Main';
import Dashboard from './Dashboard/Dashboard';
import Settings from './Settings/Settings';

var maincomp = <Main />;
var dashcomp = <Dashboard />;
var setngcomp = <Settings />;

@connect((store) => {
  return {
    user: store.login.user,
    status: store.login.status,
    avatar: store.login.avatar,
  }
})
@Radium
export default class Home extends Component {
  constructor(props) {
    super(props);

      this.state = {
          selected: ''
      };
    }
    setFilter(filter,comp) {
      this.setState({selected  : filter})
      render(comp, document.getElementById('dash-load-comp'));
    };
    isActive(value) {
      return (value===this.state.selected) ?'active item':'item';
    };
  render() {
    return(
      <div>
        <div style={[Styles.leftPanel]} className="ui left vertical inverted labeled icon sidebar overlay visible menu" onClick={this.menutoggle.bind(this)}>
          <div style={[Styles.userDetails]} id="user-details">
            <div style={[Styles.userImg]}><img style={[Styles.userImgsrc]} src={this.props.avatar} alt=""/></div>
            <p style={[Styles.usrNam]}>{this.props.user}</p>
            <p style={[Styles.admSt]}>admin</p>
          </div>
          <a style={[Styles.homeMenu]} className={this.isActive('main')} onClick={this.setFilter.bind(this, 'main', maincomp)}>
            <i className="home icon"></i>
            Home
          </a>
          <a className={this.isActive('dash')} onClick={this.setFilter.bind(this, 'dash', dashcomp)}>
            <i className="dashboard icon"></i>
            Dashboard
          </a>
          <a className={this.isActive('setting')} onClick={this.setFilter.bind(this, 'setting', setngcomp)}>
            <i className="settings icon"></i>
            Settings
          </a>
          <button style={[Styles.Logout]} className="ui button" onClick={this.logout.bind(this)}>Logout</button>
        </div>
        <div>
            <div style={[Styles.rightTop]}><div style={[Styles.rightTopInsi]}>This is top</div></div>
            <div style={[Styles.rightDash]} id="dash-load-comp">Welcome to the finq app. Which manages the best way of your accounts</div>
        </div>
      </div>
    )
  }
  logout(){
    this.props.dispatch(logoutUser());
    this.props.dispatch(push('/logout'));
  }
  menutoggle() {
    $('dash-left-panel').sidebar('toggle');
  }
}

var Styles = {
  leftPanel: {
    width: '135px',
    background: 'linear-gradient(to bottom, #F8A467, #EF538C)',
  },
  userDetails: {
    marginTop: '6vh',
    textAlign: 'centre',
  },
  userImg: {
    boxShadow: '0 0 15px rgba(145, 72, 20, 0.71)',
    borderRadius: '50%',
    marginLeft: '17px',
    marginBottom: '15px',
    overflow: 'hidden',
    width: '100px',
    height: '100px',
  },
  userImgsrc: {
    width: '100%',
  },
  usrNam: {
    fontWeight: 'bold',
    fontSize: '15px',
    lineHeight: '100%',
  },
  admSt: {
    fontStyle: 'italic',
    textAlign: 'left',
    fontWeight: 'bold',
    paddingLeft: '20px',
    lineHeight: '0',
    color: '#1B395F',
  },
  homeMenu: {
    marginTop: '10vh',
  },
  Logout: {
    backgroundColor: '#292724',
    color: '#fff',
    fontWeight: '100',
    boxShadow: '0 0 10px rgba(41, 39, 36, 0.74)',
    marginTop: '25vh',
    borderRadius: '50px',
    width: '100px',
  },
  //Right panel settings
  rightTop: {
    marginTop: '0',
    marginLeft: '120px',
    minHeight: '50px',
    width: '100vw',
    boxShadow: '0 2px 10px 0.1px rgba(41, 39, 36, 0.6)',
  },
  rightTopInsi: {
    marginLeft: '25px',
  },
  rightDash: {
    marginLeft: '150px',
    marginTop: '20px',
  }
}
