import React, { Component } from 'react';
import EmailConnect from '../../Components/EmailConnect.js'
import VideoShowcase from '../../Components/VideoShowcase.js';

import '../css/Media.sass';

export default class Media extends Component {

  componentDidMount() {
    window.removeEventListener('resize', () => void 0);
    window.addEventListener('resize', function() {
      this.forceUpdate();
    }.bind(this));
  }

  render() {
    return (
      <div className="Media">
        <EmailConnect></EmailConnect>
        <VideoShowcase></VideoShowcase>
      </div>
    );
  }
  
}