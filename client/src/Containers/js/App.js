import React, { Component } from 'react';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css'

import Feature from './Feature.js';
import Footer from './Footer.js';
import Header from './Header.js';
import Media from './Media.js';
import Social from './Social.js';

import '../css/App.sass';

class App extends Component {

  componentWillMount() {
    nprogress.start();
  }

  componentDidMount() {
    nprogress.done();
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Feature></Feature>
        <Media></Media>
        <Social></Social>
        <Footer></Footer>
      </div>
    )
  }
}

export default App;