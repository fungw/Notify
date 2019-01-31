import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ButtonSet.sass';

const ButtonSet = ({ faIcons }) => {
  return (
    <div className="ButtonSet">
      {faIcons.map((item, index) => {
        return (
          <div className="brandIcon" key={ index }>
            <FontAwesomeIcon icon={ item }/>
          </div>
        )
      })}
    </div>
  )
}

export default ButtonSet;