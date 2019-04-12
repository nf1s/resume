import React, { Component } from 'react';
import Menu from './Components/Menu'
import './App.css';
import {BrowserRouter} from "react-router-dom"
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Menu>
          <Routes/>            
        </Menu>
      </BrowserRouter>
    );
  }
}

export default App;
