import React, { Component } from 'react';
import AboutMe from './AboutMe'
import Education from './Education';
import Experience from './Experience';
import Interests from './Interests';
import Books from './Books';
import Skills from './Skills';
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