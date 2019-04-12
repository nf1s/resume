import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Timeline } from 'react-material-timeline';
import { Avatar } from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/SchoolTwoTone';

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

const events = [
  {
    title: 'Tallinn University of Technology, Estonia',
    subheader: 'Sep 2014 - Jun 2017' ,
    description: [ 'Masters Degree in Cyber Security' ],
    icon: <Avatar><SchoolIcon/></Avatar>,
  },
  {
    title: 'University Of Tartu (Dual Degree), Estonia',
    subheader: 'Sep 2014 - Jun 2017' ,
    description: [ 'Dual Degree of Masters Degree in Cyber Security with Tallinn University of Technology' ],
    icon: <Avatar><SchoolIcon/></Avatar>,
  },
  {
    title: 'Slovak Technical University of Technology Bratislava, Slovakia',
    subheader: 'Mar 2016 - Jun 2016' ,
    description: [ 'Exchange' ],
    icon: <Avatar><SchoolIcon/></Avatar>,
  },
  {
    title: 'Chemnitz University of Technology, Germany',
    subheader: 'Oct 2015 - Feb 2016' ,
    description: [ 'Exchange' ],
    icon: <Avatar><SchoolIcon/></Avatar>,
  },
  {
    title: 'loughborough university, UK',
    subheader: 'Sep 2008 - Jul 2013' ,
    description: [ 'Dual Degree of Bachelor\'s Degree in Electronics and Communications Engineering',
    ' in Partnership with The British University in Egypt' ],
    icon: <Avatar><SchoolIcon/></Avatar>,
  },
  {
    title: 'The British University, Egypt',
    subheader: 'Sep 2008 - Jul 2013' ,
    description: [ 'Bachelor\'s Degree in Electronics and Communications Engineering' ],
    icon: <Avatar><SchoolIcon/></Avatar>,
  }
];

function Education (props) {
    const { classes } = props;

        return(
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <h1>My Education</h1>
                    </Paper>
                    </Grid>
                    <Grid item xs={12}>
                    <Timeline events={events}/>
                    </Grid>
                </Grid>
            </div>
        );
    }

export default withStyles(styles)(Education);