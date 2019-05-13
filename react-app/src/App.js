import React,{Component} from 'react';
import './App.css';
import SubJect from './components/Subject'
import Nav from './components/Nav'
import Content from './components/Content'

class App extends Component{
  render(){
  return (
    <div className="App">
      <SubJect title="WEB" sub="world Wide WEB@@@"></SubJect>
      <SubJect title="REACT" sub="AWESOME"></SubJect>
      <Nav></Nav>
      <Content h2="HTML" p="HTML is LSDMsdnvawndvkansdj"></Content>
    </div>
  );
  }
}

export default App;
