import React from 'react'
import brickwallart from '../../images/brickwallart.jpg'
import brandonImg from '../../images/brandonImg.png'
import emptygallery from '../../images/emptygallery.jpg'
import avatarframe from '../../images/avatarframe.png'


const Home = () => {
    return (
        <div className="Body" >
            
            <div className="imageHeader" 
                style={{ backgroundImage:`url(${emptygallery})`,
                        border: "0",
                        height: "91vh",
                        margin: "0",
                        display: "flex",
                        padding: "0",
                        overflow: "hidden",
                        position: "relative",
                        maxHeight: "1000px",
                        alignItems: "center",
                        backgroundSize: "cover",
                        backgroundPosition: "center center", }}>
                <img alt="" src={brandonImg} style={{ height: "43vh",
                                                        position: "absolute",
                                                        right: "9%",
                                                        top: "13%"    }}/>
                <img alt="" src={avatarframe} style={{ height: "60vh",
                                                        position: "absolute",
                                                        right: "5%",
                                                        top: "7%"    }}/>

            </div>
        </div>
    )
}

export default Home
