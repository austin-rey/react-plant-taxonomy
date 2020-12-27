import React from 'react'

import PropTypes from 'prop-types';

import { makeStyles, withStyles  } from '@material-ui/core/styles';

import {AppBar,Tabs,Tab,Typography,Box} from '@material-ui/core';

import ImageGrid from './ImageGrid';

// Panel in which images are placed.
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
  
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
  
function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  tabContainer: {
    boxShadow: 'none',
    padding: '24px 24px'
  },
}));

const StyledTabs = withStyles({
  indicator: {
    display: 'none',
   
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#fff !important',
    borderRadius: '5px',
    background: '#707070',
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const ImageGallery = ({imageArray}) => {
    const classes = useStyles();
    
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    let imageCategories = Object.entries(imageArray);

    // Not every plant will have images for each category so only create tabs for images found.
    let tabs = imageCategories.map((cat,i) => {
      if(cat[0] != '') {
        return <StyledTab key={i} label={`${cat[0]}`} {...a11yProps(i)} />
      }
    });
    
    // Same as tabs.
    let tabPanels = imageCategories.map((cat,i) => {
      return <TabPanel key={i} value={value} index={i} className={classes.tabPanel}><ImageGrid images={cat[1]}/></TabPanel>
    });
    
    return (
      <div className={classes.root}>
        <AppBar className={classes.tabContainer} position="static" color="transparent">
          <StyledTabs
            value={value}
            onChange={handleChange}
            indicatorColor="#fff"
            textColor="#fff"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="Tabs for image gallery"
          >
            {tabs}
          </StyledTabs >
        </AppBar>
        {tabPanels}
    </div>
    )
}

ImageGallery.propTypes = {
    imageArray: PropTypes.array
}

export default ImageGallery
