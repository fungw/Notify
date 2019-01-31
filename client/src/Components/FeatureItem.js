import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './FeatureItem.sass';

const FeatureItem = ({featureDescription, featureHeading, faIcon}) => {
  return (
    <div className="FeatureItem">
      <div className="FeatureIcon">
        <FontAwesomeIcon color="white" icon={faIcon}/>
      </div>
      <h3 className="montserratBold">{featureHeading}</h3>
      <p className="montserratLight">{featureDescription}</p>
    </div>
  )
}

export default FeatureItem;