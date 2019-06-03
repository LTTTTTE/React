import React from "react";

const FuncCompTest02 =({data,data2})=>{
    
    FuncCompTest02.state ={
        number : 0
    }


    return(
        <div>
            <hr/>
            <h2>함수형 컴포넌트 테스트 DIV이다.</h2>
            <p>{data.arg1} , {data2.arg1}</p>
        
            
        </div>
    );

    
};

export default FuncCompTest02;