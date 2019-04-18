import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import ContactEmailIcon from '@material-ui/icons/ContactMailSharp'
import pink from '@material-ui/core/colors/pink';
import { FaGithubSquare , FaLinkedin } from 'react-icons/fa'

const styles = {
  card: {
    maxWidth: '100%',
  },
  media: {
    height: 140,
  },
};

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
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image=""
          title="Ahmed Nafies"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Ahmed Nafies
          </Typography>
          <Typography component="p">
            {listItems()}
          </Typography>
        </CardContent>
      <Divider />
      </CardActionArea>
    </Card>
  );
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);