import React from 'react'
import Typography from '@material-ui/core/Typography';
import Card from '../MaterialUI/Card'
import tinniImg from '../../images/tinniImg.png'
import sootheImg from '../../images/sootheImg.png'
import './Projects.css'

const Projects = () => {
    const projects = [{name: "Tinni", description: "", image: tinniImg, codeLink: "https://github.com/Brandonob/CODENAME-IDA" },
                    {name: "Soothe", description: "", image: sootheImg, codeLink: "https://github.com/Brandonob/CODENAME-IDA" }  ]

    return (
        <div className="projectsMain" >
            <Typography variant="h1" > Projects </Typography>

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

export default Projects
