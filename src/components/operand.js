import React from 'react';

import '../styles/operand.css';

const Operand = (props) => {
   return (
      <div className = {props.classes}>{props.children}</div>
   )
}

export default Operand;