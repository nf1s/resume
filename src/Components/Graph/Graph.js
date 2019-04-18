import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import pink from '@material-ui/core/colors/pink';

import './Graph.css'

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

function Graph (props){
    const { classes, impact } = props

  	return (
        <div className={classes.root}>
          <Grid item xs={12} className={ classes.grid}>
          <h3>{impact.project}</h3>
          </Grid>
          <Grid container spacing={24}>
           <Grid item xs={12} className={ classes.grid}>
            <div style={{ width: '100%', height: 300 }}>
             <ResponsiveContainer>
              <AreaChart data={impact.data}
                    margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Area type='monotone' dataKey={impact.type} stroke={pink[900]} fill={pink[900]} />
              </AreaChart>
          </ResponsiveContainer>
          </div>
        </Grid>
        <Grid item xs={12} className={ classes.grid}>
        {impact.description}
        </Grid>
      </Grid>
    </div>
    );
}

export default withStyles(styles)(Graph)