import React, {Component} from 'react'
class Test02 extends Component{
    render(){
        const title = this.props.data.title;
        const content = this.props.data.content;
        const testValue = 1;
      return(
        <div>
            <hr></hr>
            <h1>간단한 Class컴포넌트 만들고 props넘김</h1>
            <h2>{title}</h2>
            <h4>{content}</h4>
            {
              (()=>{
                if(testValue === 1) return (<h5>testValue 는 1</h5>);
                if(testValue === 2) return (<h5>testValue 는 2</h5>);
                if(testValue === 3) return (<h5>testValue 는 3</h5>);
              })()
            }
        </div>
        
      );
    }
  }

  export default Test02;