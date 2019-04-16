import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Timeline } from 'react-material-timeline';
import { Avatar } from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/SchoolSharp';
import pink from '@material-ui/core/colors/pink';
import Slide from '@material-ui/core/Slide';

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
    title: 'Tallinn University of Technology, Estonia',
    subheader: 'Sep 2014 - Jun 2017' ,
    description: [ 'Masters Degree in Cyber Security' ],
    icon: <Avatar><SchoolIcon style={{ color: pink[900] }}/></Avatar>,
  },
  {
    title: 'University Of Tartu (Dual Degree), Estonia',
    subheader: 'Sep 2014 - Jun 2017' ,
    description: [ 'Dual Degree of Masters Degree in Cyber Security with Tallinn University of Technology' ],
    icon: <Avatar><SchoolIcon style={{ color: pink[700] }}/></Avatar>,
  },
  {
    title: 'Slovak Technical University of Technology Bratislava, Slovakia',
    subheader: 'Mar 2016 - Jun 2016' ,
    description: [ 'Exchange' ],
    icon: <Avatar><SchoolIcon style={{ color: pink[500] }}/></Avatar>,
  },
  {
    title: 'Chemnitz University of Technology, Germany',
    subheader: 'Oct 2015 - Feb 2016' ,
    description: [ 'Exchange' ],
    icon: <Avatar><SchoolIcon style={{ color: pink[300] }}/></Avatar>,
  },
  {
    title: 'loughborough university, UK',
    subheader: 'Sep 2008 - Jul 2013' ,
    description: [ 'Dual Degree of Bachelor\'s Degree in Electronics and Communications Engineering',
    ' in Partnership with The British University in Egypt' ],
    icon: <Avatar><SchoolIcon style={{ color: pink[200] }}/></Avatar>,
  },
  {
    title: 'The British University, Egypt',
    subheader: 'Sep 2008 - Jul 2013' ,
    description: [ 'Bachelor\'s Degree in Electronics and Communications Engineering' ],
    icon: <Avatar><SchoolIcon style={{ color: pink[100] }}/></Avatar>,
  }
];

class Education extends Component {

  render(){
    const { classes } = this.props;

        return(
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={12} md={12} lg={8} className={ classes.grid}>
                        <h1>Education</h1>
                    </Grid>
                    <Slide direction="up" in={true} style={{ transitionDelay: 100 }} mountOnEnter unmountOnExit>
                    <Grid item xs={12} sm={12} md={12} lg={8}>
                        <Timeline events={events}/>
                    </Grid>
                    </Slide>

                </Grid>
            </div>
        );
    }
  }

export default withStyles(styles)(Education);