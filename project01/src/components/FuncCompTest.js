import React from "react";

const FuncCompTest = ({data})=>{
    const dataList = data;
    return(
        <div>
            <hr></hr>
            <h1>간단한 Function컴포넌트 만들고 props넘김</h1>
            Hell World
            <p>{dataList.arg1}</p>
            <p>{dataList.arg2}</p>
            {dataList.arg3}
        </div>
    );
};

export default FuncCompTest;