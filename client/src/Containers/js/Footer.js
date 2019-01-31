import React, { Component } from 'react';
import textData from '../../Data/textData.json';
import '../css/Footer.sass';

export default class Footer extends Component {

  render() {
    const linkText = textData['Footer']['linkText'];
    return (
      <div className="Footer">
        <ul>
          {linkText.map((item, index) => {
            return (
              <li key={ index }>
                <a href="https://github.com/fungw">{ item }</a>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
  
}