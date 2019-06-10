import React ,  {Component} from 'react'


class Tick extends Component{
    constructor(props){
        super(props);
        this.state ={ date : new Date() , toggle : true , nano : window.performance.now()}
    }

    componentDidMount() {  // Component 에서 state 값이 변경시 실행되는 메소드 
        
        if(this.state.toggle){
            this.setMilliSecTimer()
        }
        else{
            this.setSecTimer()
        }
        
    }
    setMilliSecTimer(){
        this.timer = setInterval(() =>   //정해진 텀ms(arg1) 만큼 메소드(arg0) 실행.
            {this.tickChange()}, 1
            );
    }

    setSecTimer(){
        this.timer = setInterval(() =>  //정해진 텀ms(arg1) 만큼 메소드(arg0) 실행.
            {this.tickChange()}, 1000
            );
    }

    componentWillUnmount() {  // Component 가 삭제될시 실행되는 메소드
        clearInterval(this.timer);
    }

    tickChange(){ //state갱신메소드
        this.setState({ // 오직 setState 만이 state값을 수정할수있다.
            date : new Date()
        });
    }

    //결론, 컴포넌트내에서 모든일이 일어나므로 밖에선 모른다.
    // 컴포넌트 각자가 각자의 일을 실행하기에 재사용성이 높다.


    render(){
        return(
        <div>
            <div>
                <h1>Tick Date from constructor props</h1>
                <h2> {this.state.date.toLocaleTimeString()}:{this.state.date.getMilliseconds().toString()}</h2>
                <button onClick={()=>{

                    clearInterval(this.timer);

                    if(this.state.toggle)
                        this.setSecTimer();
                    else
                        this.setMilliSecTimer();
                    
                    this.setState({
                        toggle : !this.state.toggle
                    });                 
                }}> {this.state.toggle.toString()}  milliseconds</button>
            </div>
            <div>필요없는 나노sec : {this.state.nano.toString()}</div>
            <div>
                <h1>Tick Date from outside props</h1>
                <h2> {this.props.data.date.toLocaleTimeString()}</h2>
            </div>
        </div>
        )
    }
}

export default Tick;