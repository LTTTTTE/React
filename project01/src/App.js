import React,{Component} from 'react';
//import logo from './logo.svg';
import Test from './components/Test.js'
import Test02 from './components/Test02.js'
import FuncCompTest from './components/FuncCompTest'
import './App.css';

class App extends Component{

  constructor(props){
    super(props);
    this.state ={
      test :{element01: <h2>Hello</h2> , element02 : <p>Im P Tag</p>},
      test02 :{title : "제목이름" , content : "내용.."},
      FuncCompTest : {arg1 : "Test문자열",arg2 : 4885 , arg3 : <div>DIV TAG 시다.</div>}
    }
  }

  render(){
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Test data = {this.state.test}/>
      <Test02 data = {this.state.test02} />
      <FuncCompTest data = {this.state.FuncCompTest}/>
    </div>
    
  );
  }
}

export default App;
