import React, { Component } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import pink from '@material-ui/core/colors/pink';

import './Style/Graph.css'

const data = [
      {name: 'Mar', time: 1000},
      {name: 'Jun', time: 500},
      {name: 'Sep', time: 150},
      {name: 'Dec', time: 15},

];



class Graph extends Component{

	render () {

  	return (
        <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
    	<AreaChart data={data}
            margin={{top: 10, right: 30, left: 0, bottom: 0}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Tooltip/>
        <Area type='monotone' dataKey='time' stroke={pink[900]} fill={pink[900]} />
      </AreaChart>
      </ResponsiveContainer>
    </div>
    );
  }
}

export default Graph