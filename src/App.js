import React, { Component } from 'react';
import Header from "./screens/Header.js";
import Banner from "./screens/Banner.js";
import Sidebar from "./screens/Sidebar.js";
import Gallery from "./screens/Gallery.js";
import Footer from "./screens/Footer.js";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Home"></Header>
        <Banner/>
        <div className="inline">
          <Sidebar/>
          <Gallery/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
