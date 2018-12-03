import React, { Component } from 'react';
import Navbar from './Navbar'
import img from '../images/home-pic.png';


export default class Home extends Component {
  render(){
    return(
      <div className="home-page">

          <h1>
            Hello. Welcome to Karina Pietra's Portfolio
          </h1>

        <div className= "dotted">

          <div className="navbar-position">
            <Navbar />
          </div>

          <div id="box">
            <div id="ksenia-doll">
              <div id="matryoshka">

              </div>
            </div>
          </div>


        </div>

          <div className="pic-position">
            <img src={img} alt="lady" className ="background-home-pic" />
          </div>



      </div>

    )

  }
}
