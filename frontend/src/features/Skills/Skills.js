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


const Skills = () => {
    return (
        <div className="skillsMain">
            <div className="skillImgsContainer">
            <Typography > Skills </Typography>
                    <div className="ImgContainer1" >
                        <section>
                            <img id="csslogo" alt="" src={csslogo} style={{ height: "10vh" }} />
                            <h6> React </h6>
                        </section>
                        <section>
                            <img id="htmllogo" alt="" src={htmllogo} style={{ height: "10vh" }} />
                            <h6> React </h6>
                        </section>
                        <section>
                            <img id="javascriptlogo" alt="" src={javascriptlogo} style={{ height: "10vh" }} />
                            <h6> React </h6>
                        </section>
                    </div>
                    <div className="ImgContainer2" >
                        <section>
                            <img id="reactlogo" alt="" src={reactlogo} style={{ height: "10vh" }} />
                            <h6> React </h6>
                        </section>
                        <section>
                            <img id="reduxlogo" alt="" src={reduxlogo} style={{ height: "10vh" }} />
                            <h6> React </h6>
                        </section>
                        <section>
                            <img id="nodejslogo" alt="" src={nodejslogo} style={{ height: "10vh" }} />
                            <h6> React </h6>
                        </section>
                    </div>
                    <div className="ImgContainer3" >
                        <section>
                            <img id="firebaseimg" alt="" src={firebaseimg} style={{ height: "10vh" }} />
                            <h6> React </h6>
                        </section>
                        <section>
                            <img id="postgresqllogo" alt="" src={postgresqllogo} style={{ height: "10vh" }} />
                            <h6> React </h6>
                        </section>
                        <section>
                            <img id="gitlogo" alt="" src={gitlogo} style={{ height: "9vh" }} />
                            <h6> React </h6>
                        </section>
                    </div>
                </div>

        </div>
        
            
       
    )
}

export default Skills
