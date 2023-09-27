import React from "react";
import Child from "./Cild";

const Parent=(props)=>{
    return(
        <div>
            <p>Parent Component</p>
         <Child data={props.data}/>
        </div>
    )
}

export default Parent;