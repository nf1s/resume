import React, { Component } from 'react';
import Menu from './Components/Menu'
import './App.css';
import {BrowserRouter, Route} from "react-router-dom"
import AboutMe from './Components/AboutMe'
import Education from './Components/Education';
import Experience from './Components/Experience';
import Interests from './Components/Interests';
import Books from './Components/Books';
import Skills from './Components/Skills';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Menu>
          <switch>
            <Route path="/about" component={AboutMe}/>
            <Route path="/education" component={Education}/>
            <Route path="/experience" component={Experience}/>
            <Route path="/skills" component={Skills}/>
            <Route path="/interests" component={Interests}/>
            <Route path="/books" component={Books}/>
          </switch>
        </Menu>
      </BrowserRouter>
    );
  }
}

export default App;
