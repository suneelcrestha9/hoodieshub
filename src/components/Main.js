import React from 'react'
import { Link} from 'react-router-dom'
import './Main.css'

export default function Main() {
  return (
    <>
    <section>
        <div className="mainBox">
            <div className="backgroundImage">
                <img src="./images/main.jpg" alt="" />
            </div>
            <div className="heading">
                <h1>Experience</h1>
                <h1>Comfort &</h1>
                <h1>Style</h1>
            </div>
            <div className="discription">
                <p>Our online store offers a wide selection of premium quality hoodies that are designed to keep you comfortable and stylish. Browse our collection and find the perfect hoodie that suits your style and needs.</p>
            </div>
            <div className="buttons">
                <Link to="/male"><button>Male</button></Link>
                <Link to="/female"><button>Female</button></Link>
            </div>
        </div>
    </section>


    <div className="aboutboxmain">
        <div className="aboutUs">
            <div className="aboutImage">
                <img src="./images/about.jpeg" alt="" />
            </div>  
            <div className="aboutDiscription">
                <div className="aboutTitle">
                    <h1>Premium Quality Hoodies</h1>
                    <h1> for All Seasons</h1>
                </div>
                <div className="aboutdis">
                    <p>At Suneel, we understand the importance of comfort and style, especially when it comes to hoodies. That’s why we offer a wide range of premium quality hoodies that are designed to meet your style and needs. Whether you’re looking for a winter or summer hoodie, we have got you covered.</p>
                </div>
                <div className="readmore">
                    <ul><li><Link to="">Read More</Link></li></ul>
                    
                </div>
            </div>
        </div>
        <div className="expersincebox">
            <div className="expheading">
                <h1>Experience the Best in Comfort & Style</h1>
            </div>
            <div className="experienceDis">
                <p>Our hoodies are made from premium quality materials that are designed to keep you comfortable all day long. From the softness of the fabric to the durability of the
                stitching, every detail is carefully considered to ensure you enjoy the best in comfort and style.</p>
            </div>
        </div>
    </div>
    </>
  )
}
