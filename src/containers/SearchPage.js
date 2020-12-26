import React, {useState, useEffect,useRef } from 'react'

import {useFetch} from '../hooks/useFetch'

import PropTypes from 'prop-types'

import trefle from '../api/trefle'

import {Button} from '@material-ui/core/';

import { makeStyles } from '@material-ui/core/styles';

import {Link} from "react-router-dom";

import Search from '../components/Search';
import ListCard from '../components/ListCard';
import PageHeader from '../components/PageHeader';
import SectionHeader from '../components/SectionHeader';
import FilterMenu from '../components/FilterMenu';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    margin: {
        margin: theme.spacing(1),
    },
    cardContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10px'
    },
    buttonContainer: {
        margin: '30px 0px'
    },
    buttonCat: {
        margin: '10px',
        textTransform: 'lowercase',
        fontWeight: 'bold',
        padding: '30px 0px',
        minWidth: '220px'
    },
    buttonLearnMore: {
        width: '100%',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        textTransform: 'lowercase'
    },
    searchContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: 'calc(100% - 30px)',
        margin: '30px 10px',
        alignItems: 'stretch'
    },
    section: {
        width: '100%'
    },
    link: {
        textDecoration: 'none',
        color: '#fff',
        width: '100%'

    }
}));

const SearchPage = () => {
    const classes = useStyles();
    const isComponentMounted = useRef(true);

    const [searchQuery, setSearchQuery] = useState('');
    const [requestEndpoint, setRequestEndpoint] = useState('/api/v1/species/?page=278')
    const [requestParams, setRequestParams] = useState([])

    const { data, loading, error } = useFetch(
        requestEndpoint,
        isComponentMounted,
        []
      );

    const searchChange = (e) => {
        setSearchQuery(e.target.value);
        createRequestUrl(searchQuery);
    }

    const createRequestUrl = (q) => {
        setRequestEndpoint(`/api/v1/plants?q=${q}`);
    }

    function PlantResults() {
        return data.map((plant,i) => (
            <ListCard 
            key={i}
            title={plant.common_name} 
            subtext={plant.scientific_name} 
            imagePath={plant.image_url} 
            button={
                <Link className={classes.link} to={`/plant/${plant.id}`}><Button variant="contained" size="large" color="primary" className={classes.buttonLearnMore}>
                View</Button> </Link>
            }
            />
        ))
    }

    return (
        <div className={classes.root}>

            <PageHeader 
                heading='Plants and Species'
                subtext='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat vero, dicta labore sit ipsum corrupti natus! Quidem sint perferendis, beatae sit dicta, quasi non iure placeat asperiores, alias vel nesciunt. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat vero, dicta labore sit ipsum corrupti natus! Quidem sint perferendis, beatae sit dicta, quasi non iure placeat asperiores, alias vel nesciunt.'
            />

            <section id="section-popular-categories" className={classes.section} >
                <SectionHeader  
                    heading='Popular Categories'
                    subtext='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat vero, dicta labore sit ipsum corrupti natus! Quidem sint perferendis, beatae sit dicta, quasi non iure placeat asperiores, alias vel nesciunt. '
                />
                <div className={classes.buttonContainer}>
                   
                    <Link className={classes.link} to="/category/recent-discoveries"> <Button variant="contained" size="large" color="primary" className={classes.buttonCat}>recently discoveries</Button></Link>
                    <Link className={classes.link} to="/category/oldest-discoveries"> <Button variant="contained" size="large" color="primary" className={classes.buttonCat}>oldest discoveries</Button></Link>
                    <Link className={classes.link} to="/category/edible"> <Button variant="contained" size="large" color="primary" className={classes.buttonCat}>edible</Button></Link>
                    <Link className={classes.link} to="/category/vegetables"> <Button variant="contained" size="large" color="primary" className={classes.buttonCat}>vegetables</Button></Link>
                    <Link className={classes.link} to="/category/plants-by-rank"> <Button variant="contained" size="large" color="primary" className={classes.buttonCat}>plants by rank</Button></Link>
                </div>
            </section>
            
            <section id="section-search" className={classes.section} >
                <SectionHeader  
                    heading='Search by Name'
                    subtext=''
                />
                <div className={classes.searchContainer}>
                    <Search 
                        id='search-bar'
                        label='Search'
                        placeholder='Enter a species or plant'
                        disabled={false}
                        handleChange={searchChange}
                    />
                    <FilterMenu/>
                </div>
            </section>
                
            <section id="section-search-results" className={classes.section} >
                {(loading)
                ? <h2>Loading</h2>
                :(
                    <div className={classes.cardContainer}>
                        <PlantResults />
                    </div>
                )
                } 
            </section>
            
        </div>
    )
}

SearchPage.propTypes = {

}

export default SearchPage

// Filters
// -------
// Common Name
// Scientific_name
// Edible
// Vegetable 
// Author
// Year
// Family Name
// Duration (Life Cycle)
// Has scientific sources
// Foliage
// Fruit or Seeds
// Produced Flowers

// Range
// -------
// Max-Height
// Ph-min-max

// Order
// Year
// Scientific name