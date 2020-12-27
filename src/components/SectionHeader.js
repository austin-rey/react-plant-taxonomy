import { makeStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types'

import Divider from '@material-ui/core/Divider';
const useStyles = makeStyles({
    root: {
     display: 'flex',
     flexDirection: 'column',
     alignItems: 'flex-start',
     margin: '0px 0px 10px 0px',
     width: '100%'
    },
    headingContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%'
    },
    heading: {
        margin: '0px',
    },
    divider: {
        width: '80%',
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
            <div className={classes.headingContainer}>
                <h2 className={classes.heading}>{heading}</h2>
                <Divider className={classes.divider}/>
            </div>
           
            {subtext && <p className={classes.subtext}>{subtext}</p>}
        </div>
    )
}

SectionHeader.propTypes = {
    heading: PropTypes.string,
    subtext: PropTypes.string,
}


export default SectionHeader
