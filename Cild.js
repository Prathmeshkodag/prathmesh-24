import React from "react";

const Child=(props)=>{
    return(
        <div>
        <p>Data come from greatgrand parent {props.data}</p>
        </div>
    )
}

export default Child