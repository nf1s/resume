import React, { Component } from 'react';
import AboutMe from './Pages/AboutMe/AboutMe'
import Education from './Pages/Education/Education';
import Experience from './Pages/Experience';
import Impact from './Pages/Impact';
import Books from './Pages/Books/Books';
import Contact from './Pages/Contact/Contact';
import Skills from './Pages/Skills';
import {Route} from "react-router-dom"

class Routes extends Component{

    render(){
        return(
            <span>
                <Route exact path="/" component={AboutMe} />          
                <Route path="/about" component={AboutMe}/>
                <Route path="/education" component={Education}/>
                <Route path="/experience" component={Experience}/>
                <Route path="/skills" component={Skills}/>
                <Route path="/impact" component={Impact}/>
                <Route path="/books" component={Books}/>
                <Route path="/contact" component={Contact}/>

            </span>
        );
    }
}

export default Routes