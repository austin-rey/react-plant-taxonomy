import React from 'react'

import PropTypes from 'prop-types';

import SwipeableViews from 'react-swipeable-views';

import { makeStyles, useTheme } from '@material-ui/core/styles';

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
      backgroundColor: theme.palette.background.paper,
    },
  }));
  
const ImageGallery = ({imageArray}) => {
    const classes = useStyles();

    console.log(imageArray);

    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };

    return (
      <div className={classes.root}>

        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Bark" {...a11yProps(0)} />
            <Tab label="Flowers" {...a11yProps(1)} />
            <Tab label="Fruit" {...a11yProps(2)} />
            <Tab label="Habit" {...a11yProps(3)} />
            <Tab label="Leaf" {...a11yProps(4)} />
            <Tab label="Other" {...a11yProps(5)} />
          </Tabs>
        </AppBar>

        <TabPanel value={value} index={0} className={classes.tabPanel}>
          <ImageGrid images={imageArray.bark}/>
        </TabPanel>
        <TabPanel value={value} index={1} className={classes.tabPanel}> 
          <ImageGrid images={imageArray.flower}/>
        </TabPanel>
        <TabPanel value={value} index={2} className={classes.tabPanel}>
          <ImageGrid images={imageArray.fruit}/>
        </TabPanel>
        <TabPanel value={value} index={3} className={classes.tabPanel}>
          <ImageGrid images={imageArray.habit}/>
        </TabPanel>
        <TabPanel value={value} index={4} className={classes.tabPanel}>
          <ImageGrid images={imageArray.leaf}/>
        </TabPanel>
        <TabPanel value={value} index={5} className={classes.tabPanel}>
          <ImageGrid images={imageArray.other}/>
        </TabPanel>
    </div>
    )
}

ImageGallery.propTypes = {
    imageArray: PropTypes.array
}

export default ImageGallery
