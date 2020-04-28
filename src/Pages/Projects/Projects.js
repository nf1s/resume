import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import ImageCard from '../../Components/ImageCard/ImageCard';
import PropTypes from 'prop-types';

const projects = [
  {
    title: 'Code Complete 2nd Ed.',
    subheader: 'by Steve McConnell',
    cover: 'https://images.gr-assets.com/books/1396837641l/4845.jpg',
    url: 'https://www.goodreads.com/book/show/4845.Code_Complete',
  },
];

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
  },
});

function Projects(props) {
  const {classes} = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} className={classes.grid}>
          <div>
            <h1>My projects</h1>
          </div>
        </Grid>
        {projects.map((article, index) => {
          return (
            <Slide
              direction="left"
              in={true}
              key={index}
              style={{transitionDelay: index * 50}}
              mountOnEnter
              unmountOnExit>
              <Grid item xs={4}>
                <ImageCard obj={article} index={index} />
              </Grid>
            </Slide>
          );
        })}
      </Grid>
    </div>
  );
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);
