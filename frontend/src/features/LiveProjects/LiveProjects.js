import React from 'react'
import Card from '../MaterialUI/Card'
import './LiveProjects.css'
import tinniImg from '../../images/tinniImg.png'
import Typography from '@material-ui/core/Typography';

const LiveProjects = () => {
    const projects = [{name: "Tinni", description: "", image: tinniImg, codeLink: "https://github.com/Brandonob/CODENAME-IDA" }]
    return (
        <div className="lpContainer">
            <Typography > Live Projects </Typography>

            <div className="projectsContainer">
                {projects.map(el => {
                    return(
                        <div>
                            <Card name={el.name} description={el.description} image={el.image} codeLink={el.codeLink} />
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default LiveProjects
