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
import Divider from '@material-ui/core/Divider';
const styles = {
  card: {
    maxWidth: '100%',
  },
  media: {
    height: 140,
  },
};

function Contact(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Ahmed Nafies
          </Typography>
          <Typography component="p">

          </Typography>
        </CardContent>
        <List component="nav">
        <Divider />
        <ListItem>
          <ListItemText primary="Inbox" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
      <Divider />
      </CardActionArea>
    </Card>
  );
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);