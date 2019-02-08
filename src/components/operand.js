import React from 'react';

import '../styles/operand.css';

const Operand = (props) => {
   const value = props.children;
   return (
      <div className = {props.classes} onClick={() => props.clicked(value)}>{value}</div>
   )
}

export default Operand;