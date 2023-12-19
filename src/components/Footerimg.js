import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import './FooterTop.css'

export default function Footerimg() {
  return (
    <>
    <div className="footerTop">
        <div className="footeVid">
            <img src="/images/foot.jpg" alt="" />
        </div>
        <div className="footerlala">
            <div className="footerTitle">
            <h1>Experience Comfort & Style</h1>
        </div>
        <div className="footerDis">
            <p>At Hoodieshub, our mission is to provide our customers with the best in comfort and style. We are dedicated to quality, sustainability, and
            affordability, ensuring you get the best value for your money. Shop with us and experience the difference.</p>
        </div>
        <div className="centrebtn">
            <div className="footerbtn">
                <Link to="/male"><button>Male</button></Link>
                <Link to="/female"><button>Female</button></Link>
            </div>
        </div>
        </div>
        
    </div>
    
    <div className="footerabout">
        <div className="security footer">
            <div className="icon">
                <img src="./images/lock.png" alt="" />
            </div>
            <h3>Secure Payment</h3>
        </div>
        <div className="delivery footer ">
            <div className="icon">
                <img src="./images/delivery.png" alt="" />
            </div>
            <h3>Express Shipping</h3>
        </div>
        <div className="return footer ">
            <div className="icon">
                <img src="./images/recycle.png" alt="" />
            </div>
            <h3>Free Return</h3>
        </div>
    </div>
    <div className="line"></div>

    <div className="footerMain">
        <div className="footerName">
            <div className="hoodiesTitle">
                <h3>HoodiesHub</h3>
            </div>
            <div className="dis">
                <p>Thanks for choosing HoodiesHub. Follow us on social media and stay updated on our latest collections and promotions.</p>
            </div>
            <div className="social">
                <div className="slogo">
                    <Link to="/"><img src="./images/fac.png" alt="facebook" /></Link>
                </div>
                <div className="slogo">
                    <Link to="/"><img src="./images/ins.png" alt="insta" /></Link>
                </div>
                <div className="slogo">
                    <Link to="/"><img src="./images/pin.png" alt="pin" /></Link>
                </div>
            </div>
        </div>

        <div className="footerLink">
            <div className="footershop">
                <h3>Shop</h3>
            </div>
            <div className="links">
                <ul>
                    <li><NavLink to="/female">Female</NavLink></li>
                    <li><NavLink to="/male">Male</NavLink></li>
                </ul>
            </div>
        </div>

        <div className="footerAbout">
            <div className="about">
                <h3>About</h3>
            </div>
            <div className="home">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/sale">Sale</NavLink></li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}
