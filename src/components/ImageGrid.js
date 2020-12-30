import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
      image :{
          width: '100%',
          height: 'auto'
      }
  }));

const ImageGrid = ({images}) => {
 const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="flex-start" direction="row" wrap="wrap" spacing={1}>
            {images.map((image, i) => (
                <Grid key={i} item className={classes.imageContainer} xs={12} sm={6} lg={4}>
                    
                    <img className={classes.image} src={image.image_url} alt={image.copyright} />
                 
                </Grid>
            ))}
        </Grid>
    </div>
  );
}

ImageGrid.propTypes = {
    images: PropTypes.array
}

export default ImageGrid
