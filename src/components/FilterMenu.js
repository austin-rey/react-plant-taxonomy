import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';

import {Button,Menu,MenuItem} from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
    filterButton: {
        width: '100%',
        height: '100%',
        marginLeft: '10px'
    }
}));


  
  const FilterMenu = () => {
    const classes = useStyles();
    
    const [anchorEl, setAnchorEl] = useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <Button className={classes.filterButton} variant="contained" color="primary"aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
         Filters
        </Button>
        <Menu
          id="filter-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }

FilterMenu.propTypes = {

}

export default FilterMenu
