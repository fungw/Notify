import React from 'react';
import ButtonSet from './ButtonSet.js';
import textData from '../Data/textData.json';
import { faFacebook, faGooglePlus, faLinkedin, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import './SocialConnect.sass';

const SocialConnect = () => {
  const getInTouch = textData['Social']['getInTouch'];
  const loremIpsumCompact = textData['Social']['loremIpsumCompact'];
  const icons = [ faTwitter, faFacebook, faPinterest, faGooglePlus, faLinkedin, faYoutube ];
  return (
    <div className="SocialConnect">
      <h3>{ getInTouch }</h3>
      <p>{ loremIpsumCompact }</p>
      <ButtonSet faIcons={ icons }></ButtonSet>
    </div>
  )
}

export default SocialConnect;