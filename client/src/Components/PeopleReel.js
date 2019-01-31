import React, { Component } from 'react';
import textData from '../Data/textData.json';
import './PeopleReel.sass';

export default class Social  extends Component {
  constructor() {
    super();
    this.initialState = '';
    this.state = {
      personHovered: ''
    }
  }

  render() {
    const context = require.context('../Images/people', true, /\.(png)$/);
    let files = [];
    const names = textData['Social']['names'];

    // get the people headshot file paths
    context.keys().forEach((filename, index) => {
      files[index] = context(filename);
    });

    return (
      <div>
        <h3 className="PeopleName">{ names[this.state.personHovered] }</h3>
        <div className="PeopleReel">
          {
            files.map((item, index) => {
              return (
                <div className="container" key={ index }>
                  <img alt="a list of the notable people involved" key={ index } src={ item }></img>
                  <div className="overlay" data-key={ index } onMouseOver={ this.setPerson.bind(this) } onMouseOut= { this.reset.bind(this) }></div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }

  reset() {
    this.setState({ personHovered: this.initialState });
  }

  setPerson(e) {
    this.setState({ personHovered: e.target.getAttribute('data-key') });
  }
}