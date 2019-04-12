import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';


const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    bigAvatar: {
      margin: 10,
      width: 150,
      height: 150,
    },
  });
 
  class AboutMe extends Component {
    render(){
    const { classes } = this.props;
  
  return(
      <div>
          <div className={classes.root}>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                <Avatar alt="Ahmed Nafies" src="https://raw.githubusercontent.com/ahmednafies/resume/master/src/res/photo.png" className={classes.bigAvatar} />
                <h1>About Me</h1>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <p>Born and raised in Egypt</p>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                <p>Started assembling computers when I was 14 years old</p>
                </Paper>
              </Grid>
            </Grid>
          </div>
      </div>
  )
  };
}

AboutMe.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  withStyles(styles)(AboutMe);