import React from 'react';
import textData from '../Data/textData.json';
import './EmailConnect.sass';

const EmailConnect = () => {
  const titleText = textData['Media']['title'];
  const loremIpsum = textData['Media']['loremIpsum'];
  const placeholder = textData['Media']['placeholder'];
  const submitText = textData['Media']['submitText'];
  
  return (
    <div className="EmailConnect">
      <h3>{ titleText }</h3>
      <p>{ loremIpsum }</p>
      <form>
        <input placeholder={ placeholder }></input>
        <button>{ submitText }</button>
      </form>
    </div>
  )
}

export default EmailConnect;