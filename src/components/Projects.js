import React, { Component } from 'react';
import projects from '../data/projects.json';
import Project from './Project'

export default class Projects extends Component {
render(){
  return(
    <div>
      {
          projects.allProjects.map((e, i)=> {
            return (
              <Project title={e.title} description={e.description} imgName={e.imgName}/>
            )

        })
      }
    </div>

  )

}

}
