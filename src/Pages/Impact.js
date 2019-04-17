import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Graph from '../Components/Graph';
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

  const impacts = [
    {
      project:"Swedbank Internal Cloud",
      description:"Automating virtual machine ordering,\
        the most complex project I have ever worked in, \
        we took machine ordering and derlivery from an Average of 3 weeks to just 15 minutes",
        type:"time_in_minutes",
      data: [
        {name: 'Mar', time_in_minutes: 30240},
        {name: 'Jun', time_in_minutes: 1440},
        {name: 'Sep', time_in_minutes: 180},
        {name: 'Dec', time_in_minutes: 15},
      ]
    },
    {
      project:"Praxis Student Network",
      description:"Creating a Platform where Students can find Erasmus plus internships, \
      This Platform has helped atleast 20,000 students find internships.",
      type:"students",
      data: [
        {name: 'Jun', students: 0},
        {name: 'Jul', students: 5000},
        {name: 'Sep', students: 10000},
        {name: 'Oct', students: 20000},
      ]
    },

    {
      project:"ESN Buddy System",
      description:"System which matches buddies to incoming international students,\
       Impacts around 2000 students coming to Tallinn every year ",
       type:"students",
      data: [
        {name: 'Sep', students: 0},
        {name: 'Oct', students: 500},
        {name: 'Nov', students: 1000},
        {name: 'Dec', students: 2000},
      ]
    },
  ];

class Impact extends Component {
    
    render(){
        const { classes } = this.props;

        return(
            <div>
            <h1>Impact</h1>
            <div className={classes.root}>
                <Grid container spacing={24}>
                {impacts.map((impact, index) => {
                  return <Slide direction="left" in={true} key={index}
                  style={{ transitionDelay: index*50 }} mountOnEnter unmountOnExit>
                      <Grid item xs={8} className={ classes.grid}>
                          <Graph impact={impact}/>
                      </Grid>
                  </Slide>
                })}
                </Grid>
            </div>
            </div>
        );
    }
}

export default withStyles(styles) (Impact)