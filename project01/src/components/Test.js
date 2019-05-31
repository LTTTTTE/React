import React, {Component} from 'react'
class Test extends Component{
    render(){
        const data = this.props.data.element01;
        const data2 = this.props.data.element02;
        const testValue = 1;
      return(
        <div>
          <h1>간단한 Class컴포넌트 만들고 props넘김</h1>
            {data}
            {data2}
            {
              (()=>{
                if(testValue === 1) return (<h3>testValue 는 1</h3>);
                if(testValue === 2) return (<h3>testValue 는 2</h3>);
                if(testValue === 3) return (<h3>testValue 는 3</h3>);
              })()
            }
        </div>
        
      );
    }
  }

  export default Test;