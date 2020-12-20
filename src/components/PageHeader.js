import { makeStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types'

const useStyles = makeStyles({
    root: {
     display: 'flex',
     flexDirection: 'column',
     alignItems: 'flex-start',
     margin: '50px 0px'
    },
    heading: {
        margin: '5px 0px'
    },
    subtext: {
        margin: '5px 0px',
        textAlign: 'left'
    }
  });

const PageHeader = ({heading,subtext}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1 className={classes.heading}>{heading}</h1>
            <p className={classes.subtext}>{subtext}</p>
        </div>
    )
}

PageHeader.propTypes = {
    heading: PropTypes.string,
    subtext: PropTypes.string,
}


export default PageHeader
