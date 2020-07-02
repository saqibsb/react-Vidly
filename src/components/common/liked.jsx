import React, { Component } from 'react';
class Liked extends Component {
    state = {  }

    getfontAwesomeClasses() {
        let classes = 'fa ';
        classes += this.props.liked ? 'fa-heart' : 'fa-heart-o';
        return classes;
    }
    render() { 
        return ( 
            <i className={this.getfontAwesomeClasses()}
            onClick={this.props.onHeartClick}
            style={
                {cursor:'pointer'}
            } 
             aria-hidden="true"></i>
         );
    }
}
 
export default Liked;