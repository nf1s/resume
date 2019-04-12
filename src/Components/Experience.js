import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Timeline } from 'react-material-timeline';
import { Avatar } from '@material-ui/core';
import WorkIcon from '@material-ui/icons/WorkOutlineRounded'

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    grid: {
      alignItems: 'center',
      textAlign: 'center',
      justify: 'center',
    }
  });

const events = [
  {
    title: 'Hem Design Studio',
    subheader: 'Dec 2018 - Now (-1 year)' ,
    description: [ 'Full Stack Web Developer (React, Python/Django and Go)' ],
    icon: <Avatar><WorkIcon/></Avatar>,
  },
  {
    title: 'Swedbank',
    subheader: 'Jan 2017 - Dec 2018 (2 Years)',
    description: [ 'Full Stack Web Developer (AngularJs, Jquery, Python/Flask)' ],
    icon: <Avatar><WorkIcon/></Avatar>,
  }
];

function Experience (props) {
    const { classes } = props;

        return(
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={12} className={classes.grid}>
                            <h1>Work Experience</h1>
                    </Grid>
                    <Grid item xs={12}>
                    <Timeline events={events}/>
                    </Grid>
                </Grid>
            </div>
        );
    }

export default withStyles(styles)(Experience);