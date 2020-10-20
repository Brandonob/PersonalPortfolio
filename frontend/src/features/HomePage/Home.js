import React from 'react'
import './home.css'
import brickwallart from '../../images/brickwallart.jpg'
import brandonImg from '../../images/brandonImg.png'
import emptygallery from '../../images/emptygallery.jpg'
import avatarframe from '../../images/avatarframe.png'
import Skills from '../Skills/Skills'
// import avatarframe2 from '../../images/avatarframe2.png'
// import csslogo from '../../images/csslogo.png'
// import javascriptlogo from '../../images/javascriptlogo.png'
// import htmllogo from '../../images/htmllogo.png'
// import reactlogo from '../../images/reactlogo.png'
// import reduxlogo from '../../images/reduxlogo.png'
// import firebaseimg from '../../images/firebaseimg.png'
// import nodejslogo from '../../images/nodejslogo.png'
// import postgresqllogo from '../../images/postgresqllogo.png'
// import gitlogo from '../../images/gitlogo.png'


const Home = () => {
    return (
        <div className="body" >
            
            <div className="imageHeader" 
                style={{ backgroundImage:`url(${emptygallery})`,
                        overflow: "visible",
                        border: "0",
                        height: "92vh",
                        margin: "0",
                        display: "flex",
                        padding: "0",
                        overflow: "visible",
                        position: "relative",
                        maxHeight: "1000px",
                        alignItems: "center",
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                         }}>
                <img alt="" src={brandonImg} style={{ height: "43vh",
                                                        position: "absolute",
                                                        right: "9%",
                                                        top: "13%"    }}/>
                <img alt="" src={avatarframe} style={{ height: "60vh",
                                                        position: "absolute",
                                                        right: "5%",
                                                        top: "7%"    }}/>

            <div className="main" >
                Skills
                <Skills/>
            </div>

            </div>
        </div>
    )
}

export default Home
