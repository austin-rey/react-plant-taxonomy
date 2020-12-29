import React, {useState,useEffect } from 'react'

import PropTypes from 'prop-types'

import {useParams,Link} from "react-router-dom"

import Search from '../components/Search';
import ListCard from '../components/ListCard';
import PageHeader from '../components/PageHeader';
import SectionHeader from '../components/SectionHeader';
import FilterMenu from '../components/FilterMenu';

import {useFetchPlants} from '../hooks/useFetchPlants'
import {useFetchPlant} from '../hooks/useFetchPlant'

import {Button, Paper,Grid} from '@material-ui/core/';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    cardContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10px'
    },
    buttonContainer: {margin: '30px 0px'},
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
        width: '100%',
        marginBottom: '40px'
    },
    link: {
        textDecoration: 'none',
        color: '#fff',
        width: '100%'

    },
    paginationContainer :{
        justifyContent: 'center',
        display: 'flex',
        margin: '20px'
    },
    paginationItem :{
        backgroundColor: 'red',
        margin: '0px 15px',
        borderRadius: '5px',
        width: '50px',
        height: '50px',
        backgroundColor: '#3f51b5',
        color: '#fff'
    },
    headingImage: {
        display: 'block',
        borderRadius: '5px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
        maxHeight: '290px',
        minHeight: '290px',
        objectFit: 'cover'
    },
    w100: {width: '100%'},
    swatch6: {
        backgroundColor:'#F9F7DB',color:'#333',padding: '10px',height: '100%', borderRadius: '5px',marginBottom: '5px'
    },
    siteLink: {padding: '10px 0px'}
}));

const SearchPage = () => {
    const classes = useStyles();

    // Get page number from url
    let { pageNumber } = useParams();

    // Changes to page selection
    const [page, setPage] = useState(parseInt(pageNumber));
    const pageChange = (e,value) => setPage(value);

    // Changes to search query
    const [searchQuery, setSearchQuery] = useState('');
    const searchChange = (e) => setSearchQuery(e.target.value)

    // Data fetching for the search section
    const [requestEndpoint, setRequestEndpoint] = useState(`/api/v1/species/?page=${page}`)
    const { data, loading, error} = useFetchPlants(
        requestEndpoint,
        [],
    );

    // Data fetching for the "Random Plant" section
    const { data: randomPlantData, loading:randomPlantLoading, error:randomPlantError} = useFetchPlant(
        'api/v1/species/104781',
        [],
    );

    // Fetch data on component mount and anytime page, search query change
    useEffect(() => {
        (searchQuery != '')
            ?setRequestEndpoint(`/api/v1/species/search?q=${searchQuery}&page=${page}`)
            :setRequestEndpoint(`/api/v1/species/?page=${page}`)
    }, [page, searchQuery])

    // Plant "Cards"
    const PlantResults = data.map((plant,i) => (
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

    return (
        <div className={classes.root}>
            <Link className={classes.siteLink} to="/">Back to Landing Page</Link>
            <PageHeader 
                heading='Plants Home'
                subtext='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat vero, dicta labore sit ipsum corrupti natus! Quidem sint perferendis, beatae sit dicta, quasi non iure placeat asperiores, alias vel nesciunt. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat vero, dicta labore sit ipsum corrupti natus! Quidem sint perferendis, beatae sit dicta, quasi non iure placeat asperiores, alias vel nesciunt.'
            />
            <section id="section-plant-of-day" className={classes.section} >
                <SectionHeader  
                    heading='Plant of the Day'
                    subtext='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat vero, dicta labore sit ipsum corrupti natus! Quidem sint perferendis, beatae sit dicta, quasi non iure placeat asperiores, alias vel nesciunt. '
                />
                {(randomPlantLoading)
                    ?<h1>Loading...</h1>
                    :<Paper elevation={0}>
                        <Grid container direction="row" justify="flex-start" wrap="wrap" alignItems="stretch" spacing={1}>
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <Grid container className={classes.headingImageContainer} >
                                    <img className={classes.headingImage} src={randomPlantData.image_url} alt=""/>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={6} md={8} lg={9}>
                                <Grid container direction="column" justify="flex-start"  alignItems="stretch">
                                    <Grid className={classes.swatch6}>
                                        <p><strong>Rank</strong></p>
                                    </Grid>
                                    <Grid className={classes.swatch6} item>
                                        <p><strong>Family</strong></p>
                                    </Grid>
                                    <Grid className={classes.swatch6}>
                                        <p><strong>Genus</strong></p>
                                    </Grid>
                                    <Grid className={classes.swatch6}>
                                        <p><strong>Status</strong></p>
                                    </Grid>
                                    <Grid className={classes.swatch6}>
                                        <p><strong>Discovered</strong></p>
                                    </Grid> 
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>}
            </section>
            <section id="section-popular-categories" className={classes.section}>
                <SectionHeader  
                    heading='Popular Categories'
                    subtext='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat vero, dicta labore sit ipsum corrupti natus! Quidem sint perferendis, beatae sit dicta, quasi non iure placeat asperiores, alias vel nesciunt. '
                />
                <div className={classes.buttonContainer}>
                    <Link className={classes.link} to="/category/recent-discoveries"> <Button variant="contained" size="large" color="primary" className={classes.buttonCat}>recent discoveries</Button></Link>
                    <Link className={classes.link} to="/category/oldest-discoveries"> <Button variant="contained" size="large" color="primary" className={classes.buttonCat}>oldest discoveries</Button></Link>
                    <Link className={classes.link} to="/category/edible"> <Button variant="contained" size="large" color="primary" className={classes.buttonCat}>edible</Button></Link>
                    <Link className={classes.link} to="/category/vegetables"> <Button variant="contained" size="large" color="primary" className={classes.buttonCat}>vegetables</Button></Link>
                    <Link className={classes.link} to="/category/plants-by-rank"> <Button variant="contained" size="large" color="primary" className={classes.buttonCat}>plants by rank</Button></Link>
                </div>
            </section>
            <section id="section-search" className={classes.section}>
                <SectionHeader  
                    heading='Search'
                    subtext='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat vero, dicta labore sit ipsum corrupti natus! Quidem sint perferendis, beatae sit dicta, quasi non iure placeat asperiores, alias vel nesciunt. '
                />
                <div className={classes.searchContainer}>
                    <Search 
                        id='search-bar'
                        label='Search'
                        placeholder='Enter a species or plant'
                        disabled={false}
                        handleChange={searchChange}
                    />
                    {/* <FilterMenu/> */}
                </div>
                {(loading)
                    ?<h2>Loading</h2>
                    :<>
                        <div className={classes.cardContainer}>
                            {(PlantResults.length>0)?PlantResults:<h4>No results found.</h4>}
                        </div>
                        <Pagination className={classes.paginationContainer} count={20348} page={page} onChange={pageChange} renderItem={(item) => ( <PaginationItem className={classes.paginationItem} component={Link} to={`/search/${item.page}`}{...item}/>)}/>
                    </>
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
// Edible
// Vegetable 
// Has scientific sources
// Has images

// Range
// -------
// Height
// Year Discovered

