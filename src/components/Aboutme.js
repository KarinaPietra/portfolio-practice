import React, { Component } from 'react';
import Social from './SocialLinks'


export default class About extends Component{
  render(){
    return(
        <div className="about-color">
          <div className="about">
            <img src="" alt="picture of me"/>
            <p className="box">
              A motivated analytical thinker who graduated from University of Florida
              with a Bachelor degree in Finance and Minor in Retail Leadership.
              As well as a full stack developer graduate from Wyncode Academy.
              Extensive knowledge in strategic planning, consumer behaviors, economics, and developed
              quantitive analysis and modeling skills.
              Known as a interesting and persuasive communicator who contributes to team buidling by
              creating comfotrable and inclusive environemnt using
              out-of-the-box thinking and innovative problem solving techniques.
            </p>
          </div>
          <Social />
        </div>

    )
  }
}
