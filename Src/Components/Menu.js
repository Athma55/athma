import React, { useState } from "react"



// const Menu=()=>{
//     const [count,setCount]=useState(0)
//     const counter=()=>{
//          setCount(count+1)
//     }
//     return(
//         <div>
//             <h1>{count}</h1>
//             <button onClick={counter}>click</button>
//         </div>
//     )
// }

// export default Menu

const Menu=()=>{
    const [value,setValue]=useState("omkar")
    const counter=()=>{
         setValue("ram")
    }
    return(
        <div>
            <h1>{value}</h1>
            <button onClick={counter}>click</button>
        </div>
    )
}

export default Menu