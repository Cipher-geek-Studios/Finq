import React, { Component } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';
import { push } from 'react-router-redux';
import  { connect } from 'react-redux';
import { logoutUser } from '../actions/userActions';

export default class Sample extends Component {
  render() {
    return(
      <div>This is sample components</div>
    )
  }
}
