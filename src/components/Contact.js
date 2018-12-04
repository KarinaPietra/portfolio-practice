import React, { Component } from 'react';
import MainNav from './MainNav'
import img from '../images/linkedIn-logo.png';
import img2 from '../images/github-logo.png';
import img3 from '../images/email-logo.png'

export default class Contact extends Component {
  render(){
    return (
      <div>
          <MainNav />
        <div className="contact">
          <h1>
            Contact Information
          </h1>
          <p>
            You Can Connect With Me on Email at:
          </p>
        <div className= "email-direction">
          <p>
            <img id="email-image"src={img3} alt="linkedln"/>
          </p>
          <p>
          karinapietra95@gmail.com
          </p>
          <p>
            &
          </p>
          <p>
            Click The Following Logos to Keep Exploring
          </p>
        </div>
        <div className="social-icon">
        <div className="linkdin">
        <p className="icon-linkedin-direction">
          <a href="https://www.linkedin.com/in/karina-pietra-b64ab1124/">
          <img id="linkedin-image"src={img} alt="linkedln"/>
          </a>
          Linkdin Profile
        </p>
      </div>
        <div className="github">
        <p className="github-icon-direction">
          <a href="https://github.com/KarinaPietra">
          <img id="github-image"src={img2} alt="github"/>
          </a>
          Github Profile
        </p>
      </div>
      </div>
        </div>




      </div>
    )
  }
}
