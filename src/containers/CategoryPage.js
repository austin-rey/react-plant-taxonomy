import React from 'react'
import PropTypes from 'prop-types'

import {useParams} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';

import PageHeader from '../components/PageHeader';
import SectionHeader from '../components/SectionHeader';

const useStyles = makeStyles((theme) => ({
}));

const CategoryPage = () => {
    const classes = useStyles();
    let { category } = useParams();
    return (
        <div>
              <PageHeader 
                heading={category.split('-').join(' ')}
                subtext='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat vero, dicta labore sit ipsum corrupti natus! Quidem sint perferendis, beatae sit dicta, quasi non iure placeat asperiores, alias vel nesciunt. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat vero, dicta labore sit ipsum corrupti natus! Quidem sint perferendis, beatae sit dicta, quasi non iure placeat asperiores, alias vel nesciunt.'
            />
              <SectionHeader  
                heading='Section'
                subtext=''
            />
        </div>
    )
}

CategoryPage.propTypes = {
    category: PropTypes.string
}

export default CategoryPage

// On Load
// ---------
// Switch statement to determine category selected and return a request url per case
// useEffect to retrieve plant data by request url
// category needs to be in the url and passed as a prop for on page loads

// Page Sections
// ---------------


// UI
// ---------
// Page will be broken into 12 grid layout
// 3 points are for page nav which includes assess to sections
// 9 points are for the pages content