import React, { Component } from 'react';
import MainNav from './MainNav';


export default class Resume extends Component {
  render(){
    return (

    <div className="resume-color">
      <MainNav />

    <div className="border-fill">

      <div className="resume-background-info">
        <h1>Karina Pietra</h1>
          <ul>
          <li id="resume-intro">An Out- of-the-box thinker and innovative problem solver who approaches projects using extensive research-based practices to arrive at data-driven solutions. A dedicated professional has the ability to utilize and support financial databases to extract, interpret, maintain and analyze data models and reports.</li>
          <li> Phone: (786) 271-0148 </li>
          <li>Address: Miami, FL</li>
          <li>Email: karinapietra95@gmail.com</li>
        </ul>
      </div>
      <div className="education">
        <h1>Education</h1>
        <ul>
          <li>
            Wyncode Academy, Full Stack Web Developer
            <li>November 2018</li>
          </li>
          <li>
            Warrington College of Business
            University of Florida
            Bachelor of Science in Finance
            <li>
              May 2018
            </li>
          </li>
          <li>University of New South Wales Global Gator Study
            <li>Spring 2017</li>
          </li>
        </ul>

      </div>

      <div>
        <h3 className="resume-title">Professional Experience</h3>
        <ul>
          <li id="resume-intro">Wyncode Miami, Fl</li>
          <li id="resume-intro-edit">Full Stack Developer (Septmeber 2018 - Present)</li>

          <li id="special-indent">
            Programed, with a team of 3, the front and back end of a web application that serves as a platform for investors and entrepreneurs to meet.
          </li>
          <li>Role: Project Lead, React & Amazon Web Services, Rails & Action Cable </li>
          <li>Each unique user:</li>
          <li>Fills out a form to create a profile  </li>
          <li id="special-indent-right">
            Using AWS & Active Storage for images and files
          </li>
          <li>
            Selects from a series of financial questions used in our matching algorithm to calculate compatibility in ascending order           </li>
          <li id="special-indent-right">
            Investor profile remains private until they open communication in embedded messaging app by clicking “like” feature
          </li>
          <li>
          	Created by using Action Cable & Redis to establish a websocket connection for users
          </li>
          <li id="special-indent">
            Programed, with a team of 4, the front end of a Bathroom Locating App
          </li>
          <li>
          	Role: Project Lead, API parsing/request, MapBox build
          </li>
          <li>
          	Using Refuge Restroom API parsed data for private bathrooms in Miami, New York and public bathrooms across the US
          </li>
          <li id="special-indent-right">
          	Data we chose to include: latitude, longitude, comments, address, facility name
          </li>
          <li>
            Rendered chosen data onto a map
          </li>
          <li>
            Using MapBox API in order to:
          </li>
          <li id="special-indent-right">
            Geolocate user
          </li>
          <li id="special-indent-right">
            Create markers to pin point locations on map
          </li>
          <li id="special-indent-right">
            Attach modals to markers displaying comments, name, address
          </li>
          <li id="special-indent">
            Practiced Agile Development for Project Management
          </li>
        </ul>
      </div>

      <div>
        <h4 className="resume-title">WOHASU LLC, Miami, FL</h4>
        <ul>
          <li id="resume-intro">Marketing and Research Intern (June 2017-May 2018)</li>
          <li> Provided analysis and recommendations for the digital platforms and created targeted campaigns to increase web traffic, consumer engagement and generate profits.</li>
          <li>Developed retail strategy and launched company’s online merchandising initiatives; oversaw the creation of branded products from ideation to designer and vendor relations ending with sales on the web retail store</li>
          <li>Responsible for helping coordinate logistics for government officials from 20 different countries</li>
          <li>Developed style guide and audit for social media strategy</li>
        </ul>
      </div>

      <div>
        <h4 className="resume-title">VICE Media, New York</h4>
        <ul>
          <li id="resume-intro"> Digital and Communication Intern (June 2016-August 2016)</li>
          <li> Content development research for digital advertisement campaigns including DOVE’s Beauty Bias </li>
          <li> Researched and provided analysis report of Virtual Reality interface and compatibility of SamsungGear’s headset versus its competitors such as Google Cardboard </li>
          <li>Researched and created reports for Vice Money’s branded content development and tailored language for millennial audience</li>
          <li>Assisted in brainstorming content engagement for VR campaign and helped develop an action plan that included ideas and timelines for projects pitched by different Vice Verticals</li>
        </ul>
      </div>

      <div>
        <h4 className="resume-title">Technical Skills </h4>
        <ul>
          <li>Microsoft Office (Word, Excel (VBA), PowerPoint, Outlook, Access, Publisher)/Javascript/Ruby/CSS/HTML/JQuery/Ruby on Rails/React/ Markdown /Shopify/ Adobe Photoshop / Adobe InDesign/ Google Docs / Google Drive / Keynote /QuickBooks</li>
        </ul>
      </div>
    </div>
  </div>



  )

  }

}
