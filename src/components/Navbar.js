import React, {  useState } from 'react'
import {  NavLink} from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux'
export default function Navbar() {
    const item = useSelector((state)=>state.cart.items)
    const itemIncart = item.reduce((total,item)=>total + item.quantity ,0)
    const [isactive,setIsactive]=useState(false)
      
      const handelnav=()=>{
        setIsactive(!isactive)
        document.body.style.overflow = isactive ? 'auto' : 'hidden';
        }
    
  return (
    <nav>
        <div className="hamburger" onClick={handelnav}>
            <div className="ham"></div>
            <div className="ham"></div>
            <div className="ham"></div>
        </div>
        <div className="navbar" >
            <div className="navbarleft">
                <div className="logo">
                    <ul><li><NavLink to="/">HOODIESHUB</NavLink></li></ul>
                </div>
                <div className={`navlinks ${isactive ? 'show':''}`} >
                    <ul>
                        <li onClick={handelnav}><NavLink to="/shop">Shop</NavLink></li>
                        <li onClick={handelnav}><NavLink to="/sale">Sale</NavLink></li>
                        <li onClick={handelnav}><NavLink to="/male">Male</NavLink></li>
                        <li onClick={handelnav}><NavLink to="/female">Female</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="icons">
                <div className="cart">
                    <p>{itemIncart}</p>
                    <NavLink to="/cart"><img src="./images/cart.png" alt="" /></NavLink>
                </div>
            </div>
        </div>
    </nav>
  )
}
