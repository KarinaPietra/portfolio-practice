import React, { Component } from 'react';
import {Link, Route, BrowserRouter as Router} from 'react-router-dom';
import About from './Aboutme'
import Resume from './Resume'
import Contact from './Contact'


export default class Navbar extends Component {
  render(){
    return (
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </nav>

    )

  }

}
