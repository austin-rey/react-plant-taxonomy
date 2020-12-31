import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import {Grid,Modal} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
      image :{
        display: 'block',
        borderRadius: '5px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
        maxHeight: '290px',
        minHeight: '290px',
        objectFit: 'cover'
      },
      paper: {
        position: 'flex',
       alignItems: 'center',
       justifyContent: 'center',
       width: '100%',
       height: '100%'
      },
      modal: {
        outline: '0'
      },
      modalImage: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }
  }));

const ImageGrid = ({images}) => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [image, setImage] = useState('false');

    const handleOpen = (event) => {
        setImage(event.target.src);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
        <Grid container justify="flex-start" direction="row" wrap="wrap" spacing={1}>
                {images.map((image, i) => (
                    <Grid key={i} item className={classes.imageContainer} xs={12} sm={6} lg={4}>
                        <img onClick={handleOpen} className={classes.image} src={image.image_url} alt={image.copyright} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.paper}>
                <Modal
                    className={classes.modal}
                    open={open}
                    disableEnforceFocus={true}
                    keepMounted={true}
                    onClose={handleClose}
                    aria-labelledby="Image modal"
                    aria-describedby="image-modal"
                >
                    <img className={classes.modalImage} src={image} alt=""/>
                </Modal>
            </div>
          
    </div>
  );
}

ImageGrid.propTypes = {
    images: PropTypes.array
}

export default ImageGrid
