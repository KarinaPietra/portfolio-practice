import React, { Component } from 'react';


export default class Project extends Component {
  render() {

    let classes = this.props.imgName + " portfolio-img" ;

    return(
      <div>
        <h2>{ this.props.title }</h2>

        <p>{ this.props.description }</p>
      </div>
    )
  }
}
