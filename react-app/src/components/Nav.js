import React, {Component} from 'react'

class Nav extends Component{
    render(){
      //넘어온 data를 this.props.data로 사용한다.
      const list = this.props.data.map(e => {
          return <li><a href={"/content/"+e.id}>{e.title}</a></li>
      });
      
      return(
        <nav>
          <ul>
              {list}
          </ul>
      </nav>
      );
    }
  }

  export default Nav;
