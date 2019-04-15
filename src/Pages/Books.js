import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ImageCard from '../Components/ImageCard'

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

  const books = [
    {
      title: 'Clean Code',
      subheader:'A Handbook of Agile Software Craftsmanship',
      cover:'https://images.gr-assets.com/books/1436202607l/3735293.jpg',
      description: 'book talk about clean code',
    },
  ]

class Books extends Component {

    render(){
        const { classes } = this.props;

        return(
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={12} className={ classes.grid}>
                        <h1>My Favorite Books</h1>
                    </Grid>
                    {books.map((book, index) => {
                        return <Grid item xs={4}>
                                    <ImageCard book={book}/>
                                </Grid>
                    })}

                </Grid>
            </div>        
        );
    }
}

export default withStyles(styles)(Books);