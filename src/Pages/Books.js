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
        title: 'Code Complete 2nd Ed.',
        subheader:'by Steve McConnell',
        cover:'https://images.gr-assets.com/books/1396837641l/4845.jpg',
        stars:4,
        url:"https://www.goodreads.com/book/show/4845.Code_Complete"
    },
    {
        title: 'Clean Code',
        subheader:'by Robert Cecil Martin',
        cover:'https://images.gr-assets.com/books/1436202607l/3735293.jpg',
        stars:5,
        url:"https://www.goodreads.com/book/show/3735293-clean-code"
    },
    {
        title: 'Working Effectively with Legacy Code',
        subheader:'by Michael Feathers',
        cover:'https://images.gr-assets.com/books/1348627451l/44919.jpg',
        stars:4,
        url:"https://www.goodreads.com/book/show/44919.Working_Effectively_with_Legacy_Code",
    },
    {
        title: 'Writing Secure Code 2nd Ed.',
        subheader:'by Michael Howard and David LeBlanc',
        cover:'https://images.gr-assets.com/books/1396836770l/44916.jpg',
        stars:4,
        url:"https://www.goodreads.com/book/show/44916.Writing_Secure_Code",
    },
    {
        title: 'Head First Design Patterns',
        subheader:'by Elisabeth Freeman and Kathy Sierra',
        cover:'https://images.gr-assets.com/books/1408309444l/58128.jpg',
        stars:5,
        url:"https://www.goodreads.com/book/show/58128.Head_First_Design_Patterns",
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
                    return      <Grid item xs={4}>
                                    <ImageCard book={book} index={index} />
                                </Grid> 
                    })}
                </Grid>
            </div>        
        );
    }
}

export default withStyles(styles)(Books);