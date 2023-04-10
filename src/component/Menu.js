import React from "react"
import { NavLink } from 'react-router-dom'
import logo from '../images/logo 1 (1).png'
import '../component/Style.css'

function Menu(props) {
   
    return(
        <div className="navbar navbar-expand-md navbar-dark " style={{ backgroundColor:"#f0f8ff"}}>
            <div className="container">
               <NavLink to={`/`} className="navbar-brand combine"><img src={logo} alt="logo" width={70}/></NavLink>

               <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                   <span className="navbar-toggler-icon"></span>
               </button>

               <div className="collapse navbar-collapse" id="menu">
                   <ul className="navbar-nav">
                    
                       <li className="nav-item">
                           <NavLink to={`/login`} className="nav-link combine" style={{color: "blue", fontWeight: "bold"}}>Home</NavLink>
                       </li>
                       <li className="nav-item ">
                           <NavLink  className="nav-link mobile" style={{color: "blue", fontWeight: "bold"}}>+919337607560</NavLink>
                       </li>
                   </ul>
               </div>
            </div>
        </div>
    )
}

export default Menu