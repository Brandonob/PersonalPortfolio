import React, { Component } from 'react';
import cssIcon from '../Components/skillimages/cssIcon.png';
import firebaseIcon from '../Components/skillimages/firebaseIcon.png';
import gitIcon from '../Components/skillimages/gitIcon.png';
import htmlIcon from '../Components/skillimages/htmlIcon.png';
import javascriptIcon from '../Components/skillimages/javascriptIcon.png';
import nodejsIcon from '../Components/skillimages/nodejsIcon.png';
import npmIcon from '../Components/skillimages/npmIcon.png';
import postgresqlIcon from '../Components/skillimages/postgresqlIcon.png';
import reactIcon from '../Components/skillimages/reactIcon.png';
import reduxIcon from '../Components/skillimages/reduxIcon.png';
import herokuIcon from '../Components/skillimages/herokuIcon.png';
import rubyIcon from '../Components/skillimages/ruby.png';
import tailwindIcon from '../Components/skillimages/tailwind.png';
import typescriptIcon from '../Components/skillimages/typescript.png';
import dockerIcon from '../Components/skillimages/docker.png';
import mongodbIcon from '../Components/skillimages/mongo-db.png';
class Resume extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className='info'>
              {education.degree} <span>&bull;</span>
              <em className='date'>{education.graduated}</em>
            </p>
            <p>{education.description}</p>
          </div>
        );
      });
      var work = this.props.data.work.map(function (work) {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className='info'>
              {work.title}
              <span>&bull;</span> <em className='date'>{work.years}</em>
            </p>
            <p className='work-description'>{work.description}</p>
          </div>
        );
      });
      // var skills = this.props.data.skills.map(function(skills){
      //   var className = 'bar-expand '+skills.name.toLowerCase();
      //   return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      // })
    }

    return (
      <section id='resume'>
        <div
          className='row skill'
          style={{
            paddingBottom: '50px',
            borderBottom: '1px solid #E8E8E8',
            marginBottom: '50px',
          }}
        >
          <div className='three columns header-col'>
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className='nine columns main-col' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <p>{skillmessage}</p>

            <div className='skillsImgs'>
              <div>
                <img
                  alt=''
                  src={htmlIcon}
                  style={{ width: '125px', height: '125px' }}
                />
                <h1>HTML</h1>
              </div>
              <div>
                <img
                  alt=''
                  src={cssIcon}
                  style={{ width: '125px', height: '125px' }}
                />
                <h1>CSS</h1>
              </div>
              <div>
                <img
                  alt=''
                  src={javascriptIcon}
                  style={{ width: '125px', height: '125px' }}
                />
                <h1>Javascript</h1>
              </div>
              <div>
                <img
                  alt=''
                  src={postgresqlIcon}
                  style={{ width: '125px', height: '125px' }}
                />
                <h1>PostgreSQL</h1>
              </div>
              <div>
                <img
                  alt=''
                  src={nodejsIcon}
                  style={{ width: '140px', height: '140px' }}
                />
                <h1>Nodejs</h1>
              </div>
              <div>
                <img
                  alt=''
                  src={gitIcon}
                  style={{ width: '120px', height: '120px' }}
                />
                <h1 style={{ marginTop: '15px' }}>Git</h1>
              </div>
              <div>
                <img
                  alt=''
                  src={reactIcon}
                  style={{ width: '135px', height: '135px' }}
                />
                <h1>React</h1>
              </div>
              <div>
                <img
                  alt=''
                  src={reduxIcon}
                  style={{ width: '110px', height: '110px' }}
                />
                <h1 style={{ marginTop: '19px' }}>Redux</h1>
              </div>
              <div>
                <img
                  alt=''
                  src={npmIcon}
                  style={{ width: '125px', height: '125px' }}
                />
                <h1>NPM</h1>
              </div>
              <div>
                <img
                  alt=''
                  src={firebaseIcon}
                  style={{ width: '125px', height: '125px' }}
                />
                <h1>Firebase</h1>
              </div>
              <div>
                <img
                  alt=''
                  src={herokuIcon}
                  style={{ width: '110px', height: '110px' }}
                />
                <h1 style={{ marginTop: '10px' }}>Heroku</h1>
              </div>
              <div>
                <img
                  alt=''
                  src={rubyIcon}
                  style={{ width: '125px', height: '125px' }}
                />
                <h1>Ruby</h1>
              </div>
              <div>
                <img
                  alt=''
                  src={tailwindIcon}
                  style={{ width: '125px', height: '125px' }}
                />
                <h1>Tailwind CSS</h1>
              </div>
              <div>
                <img
                  alt=''
                  src={typescriptIcon}
                  style={{ width: '125px', height: '125px' }}
                />
                <h1>TypeScript</h1>
              </div>
              <div>
                <img
                  alt=''
                  src={dockerIcon}
                  style={{ width: '125px', height: '125px' }}
                />
                <h1>Docker</h1>
              </div>
              <div>
                <img
                  alt=''
                  src={mongodbIcon}
                  style={{ width: '125px', height: '125px' }}
                />
                <h1>MongoDB</h1>
              </div>
            </div>
          </div>
        </div>

        <div className='row education'>
          <div className='three columns header-col'>
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className='nine columns main-col'>
            <div className='row item'>
              <div className='twelve columns'>{education}</div>
            </div>
          </div>
        </div>

        <div className='row work'>
          <div className='three columns header-col'>
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className='nine columns main-col'>{work}</div>
        </div>
      </section>
    );
  }
}

export default Resume;
