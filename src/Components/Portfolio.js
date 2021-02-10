import React, { Component } from 'react';
import githubIcon from './skillimages/githubIcon.png'
import liveIcon from './skillimages/liveIcon.png'

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        // debugger
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            {/* <a href={projects.url} title={projects.title}> */}
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
                  {projects.liveUrl ? (
                    <div className="link-icon">
                      <a href={projects.liveUrl} title={projects.title}>
                        <img alt="" src={liveIcon} />
                        <h6 id="iconText">LIVE</h6>
                      </a>
                    </div> )
                    : null
                  }
                  {projects.liveUrl ? (
                    <div className="link-icon2" style={{ position: "absolute",
                                                        top: "70%",
                                                        left: "75%",
                                                        marginLeft: "-15px",
                                                        marginTop: "-15px" }}>
                      <a href={projects.ghUrl} title={projects.title}>
                        <img alt="" src={githubIcon} />
                        <h6 id="iconText">CODE</h6>
                      </a>
                    </div> ) : (
                    <div className="link-icon2" style={{ position: "absolute",
                                                        top: "70%",
                                                        left: "48%",
                                                        marginLeft: "-15px",
                                                        marginTop: "-15px" }}>
                                    <a href={projects.ghUrl} title={projects.title}>
                                      <img alt="" src={githubIcon} />
                                      <h6 id="iconText">CODE</h6>
                                    </a>
                      </div>
                  )}
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio" style={{ margin: "60px" }}>

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;