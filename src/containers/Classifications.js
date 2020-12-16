import React from 'react'

import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

import trefle from '../api/trefle'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
}));

const classClick = async (link) => {
    const results = await trefle.get(link);
    console.log(results.data);
}
const Classifications = ({data}) => {
    const classes = useStyles();

    return (
        <div>
             <List className={classes.root}>
                {data.map((classificationItem, i) => (
                <ListItem key={i}>
                    <ListItemText primary={classificationItem.name} secondary={classificationItem.totalResults} />
                    <Button variant="contained" onClick={()=>{classClick(classificationItem.link)}}>Default</Button>
                </ListItem>
                ))}
            </List>
        </div>
    )
}

Classifications.propTypes = {
    data: PropTypes.array
}

export default Classifications
