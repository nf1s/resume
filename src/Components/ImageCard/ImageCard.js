import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import pink from '@material-ui/core/colors/pink';
import { FaBook } from 'react-icons/fa';
import Rating from 'material-ui-rating/lib/components/Rating';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: pink[700],
  },
});


function ImageCard (props) {
    const { classes, book } = props;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <a href={book.url}>
              <Avatar aria-label={book.title} className={classes.avatar}>
                <FaBook/>
              </Avatar>
            </a>
          }
          title={book.title}
          subheader={book.subheader}
        />
        <CardMedia
          className={classes.media}
          image={book.cover}
          title={book.title}
        />
        <CardContent>
        <Rating value={book.stars} max={5}  readOnly/>
        </CardContent>
      </Card>
    );
}

ImageCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageCard);