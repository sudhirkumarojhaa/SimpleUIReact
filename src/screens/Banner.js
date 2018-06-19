import React, { Component } from 'react';
import './App.css';
import Banner from '../img/banner.jpg';


export default class banner extends Component {
  render() {
    return (
      <div className="banner">
        <img src = {Banner} alt="banner" className="bannerImg"/>
        <div className="bannerContent">
        <h1> " Not until we are lost do we begin to understand ourselves " </h1>
        </div>
      </div>
    );
  }
}


