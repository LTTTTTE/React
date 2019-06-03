import React, {Component} from 'react'
class CompStateSet extends Component{
    state = {
        number : 10
    }
    render(){
      return(
        <div>
            <hr></hr>
            <h1>
                컴포넌트 내의 state값 event 처리로 변경
            </h1>
            <div> state 값은 항상 this.setState() 메소드를 통해 값을변경한다</div>
            <div>값 : {this.state.number}</div>
            <button onClick={()=>{
                this.setState({
                    number : this.state.number +1
                });
            }}> + </button>
            <button onClick={()=>{
                this.setState({
                    number : this.state.number -1
                });
                
            }
            }> - </button>
        </div>
      )
    }
}
export default CompStateSet;