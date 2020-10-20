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


const Skills = () => {
    return (
        
        <div>
        
        {/* skills images */}
        <img alt="" src={avatarframe2} style={{ height: "60vh",
                                                    marginTop:"50px",
                                                    marginLeft: "50px" }}/>
        <img alt="" src={csslogo} style={{ height: "15vh" }} />
        <img alt="" src={htmllogo} style={{ height: "15vh" }} />
        <img alt="" src={javascriptlogo} style={{ height: "15vh" }} />
        <img alt="" src={reactlogo} style={{ height: "15vh" }} />
        <img alt="" src={reduxlogo} style={{ height: "15vh" }} />
        <img alt="" src={nodejslogo} style={{ height: "15vh" }} />
        <img alt="" src={firebaseimg} style={{ height: "15vh" }} />
        <img alt="" src={postgresqllogo} style={{ height: "15vh" }} />
        <img alt="" src={gitlogo} style={{ height: "15vh" }} />
        </div>
    )
}

export default Skills
