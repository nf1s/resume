import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class ProgressBar extends React.Component {
constructor(props){
    super(props)
    this.state = {
        completed: 0,
        finish: props.finish
    };
}

  componentDidMount() {
    this.timer = setInterval(this.progress, 200);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const { completed } = this.state;
    const diff = Math.random() * 50;
    this.setState({ completed: Math.min(completed + diff, this.state.finish) });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <LinearProgress variant="determinate" value={this.state.completed} />
      </div>
    );
  }
}

ProgressBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProgressBar);