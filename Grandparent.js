import React from "react";
import Parent from "./Parent";

const Grandparent=(props)=>{
    return(
        <div>
            <p>Grandparent</p>
       <Parent data={props.data}/>
        </div>
    )
}

export default Grandparent;