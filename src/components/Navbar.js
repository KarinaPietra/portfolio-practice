import React, { Component } from 'react';
import {Link, Route, BrowserRouter as Router} from 'react-router-dom';
import About from './Aboutme'
import Resume from './Resume'
import Contact from './Contact'


export default class Navbar extends Component {
  render(){
    return (
      <nav className="navbar">
        <div>
          <button id="home-link"><Link to="/">Home</Link></button>
          <button id="about-link"><Link to="/about">About</Link></button>
          <button id="resume-link"><Link to="/resume">Resume</Link></button>
          <button id="project-link"><Link to="/projects">Projects</Link></button>
          <button id="contact-link"><Link to="/contact">Contact</Link></button>
        </div>
    </nav>



    )

  }

}
