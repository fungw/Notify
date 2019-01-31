import React, { Component } from 'react';
import ButtonSet from '../../Components/ButtonSet.js';
import HeaderBackground from '../../Images/headerBackground.png';
import textData from '../../Data/textData.json';
import { faApple, faAndroid, faWindows } from '@fortawesome/free-brands-svg-icons'
import '../css/Header.sass';

export default class Header extends Component {

  render() {
    const icons = [ faApple, faAndroid, faWindows ];
    return (
      <header className="Header">
        <div className="headerBackground">
          <img src={ HeaderBackground } alt="main landing page background showcasing download links and an iPhone being held"/>
        </div>
        <div className="notifyContainer">
          <div className="notifyLogo">
            Notify<span className="notifyDot">.</span>
          </div>
          <div className="notifyDescription">
            <p>{ textData['Header']['description'] }</p>
          </div>
          <div className="notifyDownloads">
            <ButtonSet faIcons={ icons }></ButtonSet>
          </div>
        </div>
      </header>
    );
  }
  
}