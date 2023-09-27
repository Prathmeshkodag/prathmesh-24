import React from 'react'
import Grandparent from './Grandparent';

const Greatgrand=()=>{
    const data='hello , Good morning'
    return(
        <div>
            <p>Greatgrand parent</p>
           <Grandparent data={data}/>
        </div>
    )
}

export default Greatgrand;