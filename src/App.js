import React, { Component } from 'react';
import About from './components/Aboutme'
import Navbar from './components/Navbar'
import Resume from './components/Resume'
import Social from './components/SocialLinks'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Main from './components/Main'
import Home from './components/Home'
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          

              <div>
                <Route exact path="/" component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/resume" component={Resume}></Route>
                <Route path="/contact" component={Contact}></Route>
                <Route path="/projects" component={Projects}></Route>
              </div>
        </div>
      </Router>
    );
  }
}

// const Routes = () => {
//   return (
//   <BrowserRouter>
//     <div>
//       <Route exact path="/" component={App} />
//       <Route exact path="/about" component={About}/>
//     </div>
//   </BrowserRouter>)
// }

export default App;
