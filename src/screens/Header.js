import React, { Component } from 'react';
import './App.css';
import Banner from "./Banner"


class Header extends Component {
  constructor(props){
    super(props);
    this.state={
      show:true
    }
  this.change = this.change.bind(this);
  }

  change=()=> {
    this.setState({show: !this.state.show});
    console.log(this.state.show,"rerer");
  }
  render() {
    return (
      <div className="header">
        <h2 className="logo">{this.props.title}</h2>
        <h2 className="menu" onClick={this.change}><i className="fas fa-bars"></i></h2>
        {!this.state.show ? <Banner/>: null}
      </div>
    );
  }
}

export default Header;
