import React from 'react';

class Toggler extends React.Component {
   render() {
      return (
         <div
            className={this.props.class}
            onClick={this.props.clicked}>
            {this.props.value === "day" ? <img src={require('../assets/moon.svg')} /> : <img src={require("../assets/sunny.svg")} />}
         </div>
      )
   }
}

export default Toggler;