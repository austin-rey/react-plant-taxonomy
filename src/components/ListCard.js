import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

import {Card,CardActions,CardContent,CardMedia} from '@material-ui/core/';

import PropTypes from 'prop-types'

const useStyles = makeStyles({
    root: {
        minWidth: '305px',
    width: 'calc(25% - 10px)',
      margin: '5px'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    actions: {
        margin: '0',
        padding: '0',
        width: '100%'
    },
    heading: {
        margin: '5px 0px'
    },
    subtext: {
        margin: '5px 0px'

    }
  });

const ListCard = ({title,subtext,imagePath,button}) => {
    const classes = useStyles();
    return (
        <>
            <Card className={classes.root}>
                <CardMedia
                component="img"
                alt={subtext}
                height="240"
                image={imagePath}
                title={title}
                />
                <CardContent className={classes.content}>
                    <h2 className={classes.heading}>{title}</h2>
                    <p className={classes.subtext}>{subtext}</p>
                </CardContent>
                <CardActions className={classes.actions}>
                   {button}
                </CardActions>
            </Card>
        </>
    )
}

ListCard.propTypes = {
    title: PropTypes.string,
    subtext: PropTypes.string,
    button: PropTypes.element,
    imagePath: PropTypes.string
}

export default ListCard
