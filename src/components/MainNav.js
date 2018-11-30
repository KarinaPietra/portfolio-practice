import React, { Component } from 'react';
import {Link, Route, BrowserRouter as Router} from 'react-router-dom';
import About from './Aboutme'
import Resume from './Resume'
import Contact from './Contact'


export default class MainNav extends Component {
  render(){
    return (
    <div className= "main-nav">
      <nav className="main-top-nav">
          <button>
            <Link to="/">Home</Link>
          </button>
          <button>
            <Link to="/about">About</Link>
          </button>
          <button>
            <Link to="/resume">Resume</Link>
          </button>
          <button>
            <Link to="/contact">Contact</Link>
          </button>
          <button>
            <Link to="/projects">Projects</Link>
          </button>

      </nav>
    </div>
    )

  }

}
