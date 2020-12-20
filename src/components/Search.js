import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles';

import {TextField} from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        marginRight: '10px'
    },
}));

const Search = ({id, handleChange, label, placeholder, disabled}) => {
    const classes = useStyles();

    return (
        <>
          <TextField 
          className={classes.root}
          id={id}
          label={label}
          placeholder={placeholder}
          type="search" 
          variant="outlined"
          onChange={handleChange}
          disabled={disabled}
          />
        </>
    )
}

Search.propTypes = {
    id: PropTypes.string,
    handleChange: PropTypes.func,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool
}

Search.defaultValues = {
    handleChange: ()=>{console.log('No handle change function.')},
    placeholder: 'Please enter a value.',
    disabled: false
}

export default Search
