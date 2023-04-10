import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Menu from "./component/Menu"
import Login from "./component/Login"



function App(props){
  return (
    <BrowserRouter>
    <Menu/>
    <Routes>
          <Route path={`/login`} element={<Login/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App