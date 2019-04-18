import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Zoom from '@material-ui/core/Zoom';


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
 
  function AboutMe (props) {
    const { classes } = props;
  
  return(
      <div>
          <div className={classes.root}>
            <Grid container spacing={24}>
            <Zoom in={true} style={{ transitionDelay: 40 }}>
                <Paper className={classes.paper}>
                <Grid item xs={12}>
                <Zoom in={true} style={{ transitionDelay: 150 }}>
                <Avatar alt="Ahmed Nafies" src="https://raw.githubusercontent.com/ahmednafies/resume/master/src/res/photo.png" className={classes.bigAvatar} />
                </Zoom>
                </Grid>
                <Grid item xs={12}>
                <div>
                  I am an IT veteran with focus on web development,
                  Java was my old friend but Python and I became best friends serveral years ago.
                  I recently started hanging out with Go, and Go is AWESOME.
                  </div>
                  <div>
                  My favorite stack is Python/Django and React.
                  But I have the most experience with Python/Flask and AngularJS.
                  </div>
                </Grid>               
                </Paper>
                </Zoom>
            </Grid>
          </div>
      </div>
  )
}

AboutMe.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  withStyles(styles)(AboutMe);