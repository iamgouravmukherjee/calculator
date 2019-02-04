import React from 'react';

class Toggler extends React.Component {
   render() {
      return(
         <div 
            className = {this.props.class} 
            onClick = {this.props.clicked}>
            {this.props.value !== "day" ? <i className="far fa-moon"></i>: <i class="fas fa-sun"></i> }
         </div>
      )
   }
}

export default Toggler;