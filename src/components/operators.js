import React from 'react';

import '../styles/operators.css';

const Operator = (props) => {
   return (
      <div className = {props.classes} onClick={() => props.clicked(props.children)}>{props.children}</div>
   )
}

export default Operator;