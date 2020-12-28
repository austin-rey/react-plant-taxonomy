import { makeStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types'

import {Divider, Grid} from '@material-ui/core/';
const useStyles = makeStyles({
    root: {
        margin: '0px 0px 10px 0px',
    },
    heading: {
        margin: '0px',
    },
    divider: {
        marginLeft: '10px'
    },
    subtext: {
        margin: '5px 0px',
        textAlign: 'left'
    }
  });

const SectionHeader = ({heading,subtext}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container direction="row" justify="flex-start" alignItems="center" wrap="wrap">
                <Grid item><h2 className={classes.heading}>{heading}</h2></Grid>
                <Grid item s={6} md={9} l={9} xl={9}><Divider variant="fullWidth" className={classes.divider}/></Grid>
            </Grid>
            {subtext && <p className={classes.subtext}>{subtext}</p>}
        </div>
    )
}

SectionHeader.propTypes = {
    heading: PropTypes.string,
    subtext: PropTypes.string,
}


export default SectionHeader
