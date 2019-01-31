import React, { Component } from 'react';
import PeopleReel from '../../Components/PeopleReel.js';
import SocialConnect from '../../Components/SocialConnect.js';
import textData from '../../Data/textData.json';
import '../css/Social.sass';

export default class Social  extends Component {

  render() {
    const loremIpsum = textData['Social']['loremIpsum'];
    return (
      <div className="Social">
        <p><i>{ loremIpsum }</i></p>
        <PeopleReel></PeopleReel>
        <SocialConnect></SocialConnect>
      </div>
    );
  }
  
}