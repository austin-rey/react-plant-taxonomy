import React, {useState, useEffect, Suspense} from 'react'

import PropTypes from 'prop-types'

import trefle from '../api/trefle'

import {Button} from '@material-ui/core/';

import { makeStyles } from '@material-ui/core/styles';

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
        justifyContent: 'flexStart'
    },
    margin: {
        margin: theme.spacing(1),
    },
    cardContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: '10px'
    },
    buttonContainer: {
        margin: '30px 0px'
    },
    buttonCat: {
        margin: '0px 10px',
        textTransform: 'lowercase',
        fontWeight: 'bold',
        padding: '30px 0px',
        minWidth: '230px'
    },
    buttonLearnMore: {
        width: '100%',
        borderTopLeftRadius: 0,
        borderTopLeftRadius: 0,
        textTransform: 'lowercase'
    },
    searchContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    }
}));

const SearchPage = () => {
    const classes = useStyles();

    const [searchQuery, setSearchQuery] = useState('');
    const [requestEndpoint, setRequestEndpoint] = useState('/api/v1/plants/')
    const [requestParams, setRequestParams] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});
    const [plantData, setPlantData] = useState([]);

    useEffect(() => {
        let ignore = false;
        const fetchData = async () => {
            setLoading(true);
            try {
                setError({});
                const Plants = await trefle.get(requestEndpoint)
                if(!ignore) setPlantData(Plants.data.data);
            } catch (error) {
                setError(error);
            }
           setLoading(false);
        }
        fetchData();
        return(()=>{ignore=true;});
    }, [requestEndpoint])
    
    console.log(plantData);

    const searchChange = (e) => {
        setSearchQuery(e.target.value);
        createRequestUrl(searchQuery);
    }

    const createRequestUrl = (q) => {
        setRequestEndpoint(`/api/v1/plants?q=${q}`);
    }

    function PlantResults() {
        return plantData.map((plant,i) => (
            <ListCard 
            title={plant.common_name} 
            subtext={plant.scientific_name} 
            imagePath={plant.image_url} 
            button={
                <Button variant="contained" size="large" color="primary" className={classes.buttonLearnMore}>
                    View
                </Button> 
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
            <SectionHeader  
                heading='Popular Categories'
                subtext=''
            />
            <div className={classes.buttonContainer}>
                <Button variant="contained" size="large" color="primary" className={classes.buttonCat}>
                    recently discovered
                </Button> 
                <Button variant="contained" size="large" color="primary" className={classes.buttonCat}>
                    oldest discoveries
                </Button> 
                <Button variant="contained" size="large" color="primary" className={classes.buttonCat}>
                    edible
                </Button> 
                <Button variant="contained" size="large" color="primary" className={classes.buttonCat}>
                    vegetables
                </Button> 
                <Button variant="contained" size="large" color="primary" className={classes.buttonCat}>
                    plants by rank
                </Button> 
            </div>
 
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
                

            {(loading)
            ? <h2>Loading</h2>
            :(
                <div className={classes.cardContainer}>
                <PlantResults />
                </div>
            )
            } 
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