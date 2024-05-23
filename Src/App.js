import React from "react"

import ReactDOM from "react-dom/client" 

import "../index.css"

import Header from "./Components/Header"

import Body from "./Components/Body"

import Menu from "./Components/Menu"


const Ram=()=>{
    return(
         <div>
        <Header/>
        <Body/>
        <Menu/>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<Ram/>)


