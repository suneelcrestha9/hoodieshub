import React from 'react'
import {  NavLink} from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux'
export default function Navbar() {
    const item = useSelector((state)=>state.cart.items)
    const itemIncart = item.reduce((total,item)=>total + item.quantity ,0)
  return (
    <nav>
        <div className="navbar">
            <div className="navbarleft">
                <div className="logo">
                    <ul><li><NavLink to="/">HOODIESHUB</NavLink></li></ul>
                </div>
                <div className="navlinks">
                    <ul>
                        <li><NavLink to="/shop">Shop</NavLink></li>
                        <li><NavLink to="/sale">Sale</NavLink></li>
                        <li><NavLink to="/male">Male</NavLink></li>
                        <li><NavLink to="/female">Female</NavLink></li>
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
