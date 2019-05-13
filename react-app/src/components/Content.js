import React, {Component} from 'react'
class Content extends Component{
    render(){
      return(
        <article>
          <h2>{this.props.h2}</h2>
          <p>{this.props.p}</p>
      </article>
      );
    }
  }

  export default Content;