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
          <button className= "button-sizing"><Link to="/">Home</Link></button>
          <button className="about-sizing"><Link to="/about">About</Link></button>
          <button className="resume-sizing"><Link to="/resume">Resume</Link></button>
          <button className="contact-sizing"><Link to="/contact">Contact</Link></button>
          <button className="projects-sizing"><Link to="/projects">Projects</Link></button>
        </div>
    </nav>



    )

  }

}
