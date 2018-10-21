import React, { Component } from 'react';

export default class Contact extends Component {
  render(){
    return (
      <div id="contact">
        <div id="contact2">
          <h1> Contact Me </h1>
          <h2> Please feel free to drop a line with compliments and good vibes! </h2>
        </div>

        <form id="form">

          <div>
          <label id="contact">
            <div>
            Name
            </div>
            <textarea type="textarea" />
          </label>
          </div>

          <div>
          <label id="contact">
            <div>
            Email
            </div>
            <textarea type="textarea" />
          </label>
          </div>

          <div>
            <textarea id="message" type="textarea"/>
          </div>

          <input id="contact" type="submit" value="Contact Me!"/>
        </form>
      </div>
    )
  }
}
