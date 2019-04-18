import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import ContactEmailIcon from '@material-ui/icons/ContactMailSharp'
import pink from '@material-ui/core/colors/pink';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'

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
const listItem = (text, icon, ) => {
  return <span>
    <Divider />
    <ListItem>
      <ListItemIcon>
        <Avatar>{icon}</Avatar>
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  </span>
};


const listItems = () => {
  return <List>
    {listItem("ahmed.nafies@gmail.com", <ContactEmailIcon style={{ color: pink[900] }} />)}
    {listItem("https://github.com/ahmednafies", <FaGithubSquare style={{ color: pink[900] }} />)}
    {listItem("https://www.linkedin.com/in/ahmednafies", <FaLinkedin style={{ color: pink[900] }} />)}
  </List>
};


function Contact(props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} className={classes.grid}>
          <h1>Contact</h1>
          {listItems()}
        </Grid>
      </Grid>
    </div>
  );
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);