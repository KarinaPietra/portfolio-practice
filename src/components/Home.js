import React, { Component } from 'react';
import Navbar from './Navbar'


export default class Home extends Component {
  render(){
    return(
      <div className="home-page">
        <div>
          <h1 className="hello">
            Hello. Welcome to Karina Pietra's Portfolio
          </h1>
            <Navbar />
        </div>
      </div>

    )

  }
}
