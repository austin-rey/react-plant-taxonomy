import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      imageContainer: {
          maxWidth: '400px'
      },
      image :{
          width: '100%',
          height: 'auto'
      }
  }));

const ImageGrid = ({images}) => {
 const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="flex-start" direction="row" wrap="wrap" spacing={2} lg={9}>
                    {images.map((image, i) => (
                        <Grid key={i} item className={classes.imageContainer}>
                            <img className={classes.image} src={image.image_url} alt={image.copyright} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    </div>
  );
}

ImageGrid.propTypes = {
    images: PropTypes.array
}

export default ImageGrid
