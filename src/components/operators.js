import React from 'react';

import '../styles/operators.css';

const Operator = (props) => {
   return (
      <div className = {props.classes}>{props.children}</div>
   )
}

export default Operator;