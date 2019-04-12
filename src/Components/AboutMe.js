import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ImgMediaCard from './ImageCard'

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });

class AboutMe extends Component {

    render(){
        return(
            <div>
            <h1>About Me</h1>
            <p>Born and raised in Egypt</p>
            <p>Started assembling computers when I was 14 years old</p>
            <ImgMediaCard/>
            <ImgMediaCard/>
            </div>
        );
    }
}

export default  withStyles(styles)(AboutMe);