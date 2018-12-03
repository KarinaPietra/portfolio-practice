import React, { Component } from 'react';
import Social from './SocialLinks'
import MainNav from './MainNav'


export default class About extends Component{
  render(){
    return(
        <div className="about-color">
          <MainNav />
        <div className= "main">
        <img src="/images/profile-pic.jpg" alt="picture of me"/>
          <div className="about">
            <p>Hi I am Karina,</p>
            <p>
              I am a dedicated, hardworking, strategic problem solver who graduated from the University of Florida with a B.S. in Finance and as Full Stack Web Developer from Wyncode Academy. I have a passion for people and data, specifically what data can do for people. From both my personal and professional experiences, I believe that great change can be achieved by shifting our economic sectors from traditional to agile practices in order to adapt positively to our evolving societies. The following paragraph is a snippet from one of my writings to give you an insight to my thoughts.
            </p>
            <p id= "snippet">
              “The growth of technology has begun our 4th Industrial Revolution merging our financial, digital, and biological worlds. If harnessed and interpreted correctly, data could improve the quality of life around the globe. Data operates our world. It controls how businesses operate financially and economically. It controls how governments enact policies. It controls how the media impacts consumers and audiences. Technology can serve as a valuable vehicle to optimize information sharing and distribution, leading to revolutionary changes in all sectors of our economy. We can use data to inform stakeholders including leaders, activists, and policy makers so that decision can be seen through a rational lens. The responsible use of data can serve to improve education, financial services, healthcare, inequality, as well as much more.”
            </p>
            <p>
              Thanks for visiting my portfolio site. I hope you have an amazing day!
            </p>
          </div>
          </div>
        </div>

    )
  }
}
