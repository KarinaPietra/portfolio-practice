import React, { Component } from 'react';
import projects from '../data/projects.json';
import Project from './Project'
import MainNav from './MainNav';



export default class Projects extends Component {
render(){
  return(
  <div className="background-color-projects">
      <MainNav />
    <div className="project-container">
      <h1>SyndeSeed</h1>
      <p>Programed the front and back end of a web application </p>
      <p id= "synd-center">that serves as a platform for Investors and Entrepreneurs to meet</p>
     <p id= "heroku-link">Start Exploring SyndeSeed:
        <a href= "https://syndeseed.herokuapp.com/"> Click Me!</a>
      </p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/nBkW3gjQIRQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    </div>

    <div className="project-container">
    <h1>G2P</h1>
    <p>Programmed the front end of a Bathroom Locating App</p>
    <p id= "heroku-link">Start Exploring G2P:
       <a href= "https://g2pp.herokuapp.com/"> Click Me!</a>
    </p>

    <iframe width="560" height="315" src="https://www.youtube.com/embed/NhqruSXhyuw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

  </div>

  )

}

}
