import React, { Component } from 'react';

import Header from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import './App.css';
import CONST from '../Helpers/Contants';

class App extends Component {
  constructor(){
    super();
    this.state= {
      route : CONST.MENU.ABOUT
    }
  }
  render() {
    return (
      <div className="personal-profile">
        <Header route={this.state.route} setRoute={this.setRoute.bind(this)} />
        <Main route={this.state.route}/>
        <Footer/>
      </div>
    );
  }
  setRoute(route) {
    this.setState({
      route : route
    });
  }
}

export default App;
