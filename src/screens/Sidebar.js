import React, { Component } from 'react';
import './App.css';


export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <ul>
          <li>Places</li>
          <li>Photos</li>
          <li>Blogs</li>
        </ul>
      </div>
    );
  }
}

