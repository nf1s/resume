import React, { Component } from 'react';
import LinearDeterminate from './ProgressBar'

class Interests extends Component {

    render(){
        return(
            <div>
            <h1>This is Interests Page</h1>
            <LinearDeterminate final={80}/>
            </div>
        );
    }
}

export default Interests