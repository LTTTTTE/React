import React, {Component} from 'react'

class SubJect extends Component{
    render(){
      return(
      <header>
          <h1>{this.props.title}</h1>
          {this.props.sub}
      </header>
      );
    }  
  }

  export default SubJect;