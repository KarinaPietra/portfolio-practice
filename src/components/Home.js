import React, { Component } from 'react';
import Navbar from './Navbar'
import img from '../images/home-pic.png';


export default class Home extends Component {
  render(){
    return(
      <div className="home-page">
        <div className="home-head">
          <h1>
            Hi, Welcome To My Portfolio
          </h1>
          <h2>
            My Name is Karina Pietra
          </h2>
          <h3>
            More About Me is Just A Click Away
          </h3>
        </div>

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
