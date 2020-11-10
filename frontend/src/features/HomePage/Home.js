import React from 'react'
import './home.css'
import brickwallart from '../../images/brickwallart.jpg'
import brandonImg from '../../images/brandonImg.png'
import emptygallery from '../../images/emptygallery.jpg'
import avatarframe from '../../images/avatarframe.png'
import Skills from '../Skills/Skills'
import LiveProjects from '../LiveProjects/LiveProjects'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import Blob from '../Springs/Blob'

const Home = () => {
    return (
        <div className="body" >
            
            <div className="imageHeader" 
                style={{ 
                        backgroundImage:`url(${emptygallery})`,
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
                {/* <div className="blob1">
                    <Blob/>
                </div> */}
                
                {/* <div className="blob3">
                    <Blob/>
                </div>
                <div className="blob4">
                    <Blob/>
                </div> */}


                
                <img alt="" src={brandonImg} style={{ height: "43vh",
                                                        position: "absolute",
                                                        right: "9%",
                                                        top: "13%"    }}/>
                <img alt="" src={avatarframe} style={{ height: "60vh",
                                                        position: "absolute",
                                                        right: "5%",
                                                        top: "7%"    }}/>

            <div className="main" >
                <Skills />
                <LiveProjects />
                <Projects />
                <Contact />
            </div>

            </div>
        </div>
    )
}

export default Home
