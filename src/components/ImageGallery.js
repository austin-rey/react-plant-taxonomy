import React from 'react'

import PropTypes from 'prop-types';

import SwipeableViews from 'react-swipeable-views';

import { makeStyles, withStyles  } from '@material-ui/core/styles';

import {AppBar,Tabs,Tab,Typography,Box} from '@material-ui/core';

import ImageGrid from './ImageGrid';

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
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };

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
            <StyledTab label={`Bark (${imageArray.bark.length})`} {...a11yProps(0)} />
            <StyledTab label={`Flowers (${imageArray.flower.length})`} {...a11yProps(1)} />
            <StyledTab label={`Fruit (${imageArray.fruit.length})`} {...a11yProps(2)} />
            <StyledTab label={`Habit (${imageArray.habit.length})`} {...a11yProps(3)} />
            <StyledTab label={`Leafs (${imageArray.leaf.length})`} {...a11yProps(4)} />
            <StyledTab label={`Other (${imageArray.other.length})`} {...a11yProps(5)} />
          </StyledTabs >
        </AppBar>

        <TabPanel value={value} index={0} className={classes.tabPanel}>
          {(imageArray.bark.length != 0)?<ImageGrid images={imageArray.bark}/>:<p>No pictures found.</p>}
        </TabPanel>
        <TabPanel value={value} index={1} className={classes.tabPanel}> 
          {(imageArray.flower.length != 0)?<ImageGrid images={imageArray.flower}/>:<p>No pictures found.</p>}
        </TabPanel>
        <TabPanel value={value} index={2} className={classes.tabPanel}>
        {(imageArray.fruit.length != 0)?<ImageGrid images={imageArray.fruit}/>:<p>No pictures found.</p>}
        </TabPanel>
        <TabPanel value={value} index={3} className={classes.tabPanel}>
          {(imageArray.habit.length != 0)?<ImageGrid images={imageArray.habit}/>:<p>No pictures found.</p>}
        </TabPanel>
        <TabPanel value={value} index={4} className={classes.tabPanel}>
          {(imageArray.leaf.length != 0)?<ImageGrid images={imageArray.leaf}/>:<p>No pictures found.</p>}
        </TabPanel>
        <TabPanel value={value} index={5} className={classes.tabPanel}>
          {(imageArray.other.length != 0)?<ImageGrid images={imageArray.other}/>:<p>No pictures found.</p>}
        </TabPanel>
    </div>
    )
}

ImageGallery.propTypes = {
    imageArray: PropTypes.array
}

export default ImageGallery
