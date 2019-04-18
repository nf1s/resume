import React , { useState, useEffect }from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import pink from '@material-ui/core/colors/pink';

const styles = {
  root: {
    flexGrow: 1,
  },
  Background: {
    color: '#fff',
    backgroundColor: pink[900],
  },
};

function ProgressBar (props) {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    var timer = setInterval(progress,70);
    // Returns a function which cleans up after component in unmount:
    return function () {
      timer = clearInterval(timer);
    };
  });

  const progress = () => {
    const diff = Math.random() * 50;
    setCompleted(Math.min(completed + diff, props.finish));
  };

  const { classes } = props;
  return (
    <div className={classes.root}>
      <LinearProgress variant="determinate" value={completed} />
    </div>
  );
}

ProgressBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProgressBar);