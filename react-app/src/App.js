import React,{Component} from 'react';
import './App.css';
import SubJect from './components/Subject'
import Nav from './components/Nav'
import Content from './components/Content'

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      subject:{title:'WEBBB', sub:'WORLDWIDDDEWEEEBB'},
      nav:[
        {id : 1 , title : 'HTML', desc : 'HTML is for information'},
        {id : 2 , title : 'CSS', desc : 'CSS is for design'},
        {id : 3 , title : 'JAvaScript', desc : 'Javascript is for interactive'}
      ]

    }
  }

  render(){
  return (
    <div className="App">
      <SubJect title={this.state.subject.title} sub={this.state.subject.sub}></SubJect>
      <SubJect title="REACT" sub="AWESOME"></SubJect>
      <Nav data = {this.state.nav}></Nav>
      <Content h2="HTML" p="HTML is LSDMsdnvawndvkansdj"></Content>
    </div>
  );
  }
}

export default App;
