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
import { useSpring, animated } from 'react-spring'

const Home = () => {
    const props = useSpring({
        from: { left: '0%', top: '0%', width: '0%', height: '0%', background: 'lightgreen' },
        to: async next => {
          while (1) {
            await next({ left: '0%', top: '0%', width: '100%', height: '100%', background: 'lightblue' })
            await next({ height: '50%', background: 'lightgreen' })
            await next({ width: '50%', left: '50%', background: 'lightgoldenrodyellow' })
            await next({ top: '0%', height: '100%', background: 'lightpink' })
            await next({ top: '50%', height: '50%', background: 'lightsalmon' })
            await next({ width: '100%', left: '0%', background: 'lightcoral' })
            await next({ width: '50%', background: 'lightseagreen' })
            await next({ top: '0%', height: '100%', background: 'lightskyblue' })
            await next({ width: '100%', background: 'lightslategrey' })
          }
        },
      })

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
