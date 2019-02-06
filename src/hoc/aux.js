import React from 'react';
import '../styles/input.css';

const Aux = (props) =>{
    return (
        <div className={props.classes}>{props.children}</div>
    );
}

export default Aux;