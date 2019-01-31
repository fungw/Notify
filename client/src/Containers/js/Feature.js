import React, { Component } from 'react';
import FeatureItem from '../../Components/FeatureItem.js';
import { faCog, faStar, faGlobeEurope } from '@fortawesome/free-solid-svg-icons'
import textData from '../../Data/textData.json';
import '../css/Feature.sass';

export default class Feature extends Component {

  render() {
    const headings = textData['Feature']['heading'];
    const icon = [ faCog, faStar, faGlobeEurope ];
    const loremIpsum = textData['Feature']['loremIpsum'];

    return (
      <div className="Feature">
        {headings.map((item, index) => {
          return <FeatureItem featureHeading={ item } featureDescription={ loremIpsum } faIcon={ icon[index] } key={ index }></FeatureItem>
        })}
      </div>
    );
  }
  
}