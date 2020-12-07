import React from 'react'
import avatarframe2 from '../../images/avatarframe2.png'
import csslogo from '../../images/csslogo.png'
import javascriptlogo from '../../images/javascriptlogo.png'
import htmllogo from '../../images/htmllogo.png'
import reactlogo from '../../images/reactlogo.png'
import reduxlogo from '../../images/reduxlogo.png'
import firebaseimg from '../../images/firebaseimg.png'
import nodejslogo from '../../images/nodejslogo.png'
import postgresqllogo from '../../images/postgresqllogo.png'
import gitlogo from '../../images/gitlogo.png'
import './Skills.css'
import Typography from '@material-ui/core/Typography';
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [-(y - 80 / 2) / 20, (x - 80 / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


const Skills = () => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    return (
        <div className="skillsMain">
            <Typography variant="h1" > Skills </Typography>
            <div className="skillImgsContainer">
                    <div className="ImgContainer1" >
                        <section>
                            <animated.div
                                class="card"
                                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                                style={{ transform: props.xys.interpolate(trans), 
                                        backgroundImage:`url(${csslogo})`, }}
                            />
                            {/* <img id="csslogo" alt="" src={csslogo} style={{ height: "10vh" }} /> */}
                            <Typography> CSS </Typography>
                        </section>
                        <section>
                        <animated.div
                                class="card"
                                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                                style={{ transform: props.xys.interpolate(trans), 
                                        backgroundImage:`url(${htmllogo})`, }}
                            />
                            {/* <img id="htmllogo" alt="" src={htmllogo} style={{ height: "10vh" }} /> */}
                            <Typography> HTML </Typography>
                        </section>
                        <section>
                        <animated.div
                                class="card"
                                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                                style={{ transform: props.xys.interpolate(trans), 
                                        backgroundImage:`url(${javascriptlogo})`, }}
                            />
                            {/* <img id="javascriptlogo" alt="" src={javascriptlogo} style={{ height: "10vh" }} /> */}
                            <Typography> JavaScript </Typography>
                        </section>
                    </div>
                    <div className="ImgContainer2" >
                        <section>
                        <animated.div
                                class="card"
                                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                                style={{ transform: props.xys.interpolate(trans), 
                                        backgroundImage:`url(${reactlogo})`, }}
                            />
                            {/* <img id="reactlogo" alt="" src={reactlogo} style={{ height: "10vh" }} /> */}
                            <Typography> React </Typography>
                        </section>
                        <section>
                        <animated.div
                                class="card"
                                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                                style={{ transform: props.xys.interpolate(trans), 
                                        backgroundImage:`url(${reduxlogo})`, }}
                            />
                            {/* <img id="reduxlogo" alt="" src={reduxlogo} style={{ height: "10vh" }} /> */}
                            <Typography> Redux </Typography>
                        </section>
                        <section>
                        <animated.div
                                class="card"
                                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                                style={{ transform: props.xys.interpolate(trans), 
                                        backgroundImage:`url(${nodejslogo})`, }}
                            />
                            {/* <img id="nodejslogo" alt="" src={nodejslogo} style={{ height: "10vh" }} /> */}
                            <Typography> Node.js </Typography>
                        </section>
                    </div>
                    <div className="ImgContainer3" >
                        <section>
                        <animated.div
                                class="card"
                                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                                style={{ transform: props.xys.interpolate(trans), 
                                        backgroundImage:`url(${firebaseimg})`, }}
                            />
                            {/* <img id="firebaseimg" alt="" src={firebaseimg} style={{ height: "10vh" }} /> */}
                            <Typography> Firebase </Typography>
                        </section>
                        <section>
                        <animated.div
                                class="card"
                                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                                style={{ transform: props.xys.interpolate(trans), 
                                        backgroundImage:`url(${postgresqllogo})`, }}
                            />
                            {/* <img id="postgresqllogo" alt="" src={postgresqllogo} style={{ height: "10vh" }} /> */}
                            <Typography> PostgreSQL </Typography>
                        </section>
                        <section>
                        <animated.div
                                class="card"
                                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                                style={{ transform: props.xys.interpolate(trans), 
                                        backgroundImage:`url(${gitlogo})`, }}
                            />
                            {/* <img id="gitlogo" alt="" src={gitlogo} style={{ height: "9vh" }} /> */}
                            <Typography> Git </Typography>
                        </section>
                    </div>
                </div>

        </div>
        
            
       
    )
}

export default Skills
