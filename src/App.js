import React, { Component } from 'react';
import Menu from './Components/Menu'
import './App.css';
import {BrowserRouter, Route} from "react-router-dom"
import AboutMe from './Components/AboutMe'
import Education from './Components/Education';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Menu>
            <Route path="/about" component={AboutMe}/>
            <Route path="/education" component={Education}/>
        </Menu>
        </BrowserRouter>

        
    );
  }
}

export default App;
