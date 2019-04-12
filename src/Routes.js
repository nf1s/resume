import React, { Component } from 'react';
import AboutMe from './Components/AboutMe'
import Education from './Components/Education';
import Experience from './Components/Experience';
import Interests from './Components/Interests';
import Books from './Components/Books';
import Skills from './Components/Skills';
import {Route} from "react-router-dom"

class Routes extends Component{

    render(){
        return(
            <switch>
                <Route exact path="/" component={AboutMe} />          
                <Route path="/about" component={AboutMe}/>
                <Route path="/education" component={Education}/>
                <Route path="/experience" component={Experience}/>
                <Route path="/skills" component={Skills}/>
                <Route path="/interests" component={Interests}/>
                <Route path="/books" component={Books}/>
            </switch>
        );
    }
}

export default Routes