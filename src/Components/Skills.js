import React, { Component } from 'react';
import ProgressBar from './ProgressBar'


class Skills extends Component {

    render(){
        return(
            <div>
                <h1>This is Skills Page</h1>
                <ProgressBar finish={80}/>
            </div>
        );
    }
}

export default Skills