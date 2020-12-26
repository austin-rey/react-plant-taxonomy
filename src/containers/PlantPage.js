import React, {useEffect,useState,useRef} from 'react'

import {useParams} from "react-router-dom"

import {useFetch} from '../hooks/useFetch'

import PropTypes from 'prop-types'

import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'
import ImageGallery from '../components/ImageGallery'
import Map from '../components/Map'
import PlantTable from '../components/Table'

import {List,ListItem,ListItemText,Paper,Grid } from '@material-ui/core/'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    section: {
        width: '100%'
    },
    listContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    distributionList: {
        textAlign: 'left'
    },
    sectionPaper : {
        margin: '50px 20px'
    },
    alignLeft: {
        textAlign: 'left'
    },
    swatch1:{backgroundColor:'#ED6A5A',color:'#fff',padding: '10px',height: '100%', borderRadius: '5px'},
    swatch2:{backgroundColor:'#5D576B',color:'#fff',padding: '10px',height: '100%', borderRadius: '5px'},
    swatch3:{backgroundColor:'#e6a969',color:'#fff',padding: '10px',height: '100%', borderRadius: '5px'},
    swatch4:{backgroundColor:'#9BC1BC',color:'#fff',padding: '10px',height: '100%', borderRadius: '5px'},
    swatch5:{backgroundColor:'#8AAE6F',color:'#fff',padding: '10px',height: '100%', borderRadius: '5px'},
    specContainer: {backgroundColor: '#efefef',padding: '10px',height: '100%', borderRadius: '5px'}
}));
const PlantPage = () => {
    const classes = useStyles();

    let { id } = useParams();

    const isComponentMounted = useRef(true);

    const { data: plantData, loading, error } = useFetch(
        `/api/v1/species/${id}`,
        isComponentMounted,
        []
    );

    return ((loading) 
            ? <h1>Loading</h1>
            : <div>

                <PageHeader 
                    heading={plantData.common_name}
                    subtext={plantData.scientific_name}
                />

                 <section id="section-plant-general-information" className={classes.section} >
                    <SectionHeader  
                        heading='General Information'
                        subtext=''
                    />
                    <Paper className={classes.sectionPaper}>
                        <Grid container justify="center" spacing={2}>
                            <Grid item xs={12} sm={4} lg={2}>
                                <h3>{plantData.family_common_name} ({plantData.family})</h3>
                                <p>Family</p>
                                
                            </Grid>
                            <Grid item xs={12} sm={4} lg={2}>
                                <h3>{plantData.genus}</h3>
                                <p>Genus</p>
                    
                            </Grid>
                            <Grid item xs={12} sm={4} lg={2}>
                                <h3>{plantData.status}</h3>
                                <p>Status</p>
                        
                            </Grid>
                            <Grid item xs={12} sm={4} lg={2}>
                                <h3>{plantData.year}</h3>
                                <p>Discovered</p>
                            
                            </Grid>
                        </Grid>
                    </Paper>
                 </section>
               
                <section id="section-photo-gallery" className={classes.section} >
                    <SectionHeader  
                        heading='Photo Gallery'
                        subtext=''
                    />
                     <Paper className={classes.sectionPaper}>
                        <ImageGallery imageArray={plantData.images}/>
                     </Paper>
                    
                </section>

                <section id="section-plant-distribution" className={classes.section} >
                    <SectionHeader  
                        heading='Distribution'
                        subtext=''
                    />
                    <Paper className={classes.sectionPaper}>
                        <Map names={plantData.distribution}/>
                        <Grid container direction="row" justify="center" alignItems="stretch" spacing={2}>
                            <Grid item xs={6} md={2} lg={2}>
                                <Grid className={classes.swatch1} container direction="column" justify="flex-start" alignItems="flex-start">
                                <h3>Native</h3>
                                {(!plantData.distributions.native)?<span>No entries found.</span>:  plantData.distributions.native?.map((item,i ) => (
                                    <Grid item>
                                        <span key={i}>{item.name}</span>
                                    </Grid>
                                ))}
                              
                                </Grid>
                            </Grid>
                            <Grid item xs={6} md={2} lg={2}>
                                <Grid className={classes.swatch2} container direction="column" justify="flex-start" alignItems="flex-start">
                                <h3>Introduced</h3>
                                {(!plantData.distributions.introduced)?<span>No entries found.</span>:plantData.distributions.introduced?.map((item,i ) => (
                                    <Grid item>
                                       <span key={i}>{item.name}</span>
                                    </Grid>
                                ))}
         
                                </Grid>
                            </Grid>
                            <Grid item xs={6} md={2} lg={2}>
                                <Grid className={classes.swatch3} container direction="column" justify="flex-start" alignItems="flex-start">
                                <h3>Doubtful</h3>
                                {(!plantData.distributions.doubtful)?<span>No entries found.</span>:plantData.distributions.doubtful?.map((item,i ) => (
                                    <Grid item>
                                       <span key={i}>{item.name}</span>
                                    </Grid>
                                ))}

                                </Grid>
                            </Grid>
                            <Grid item xs={6} md={2} lg={2}>
                                <Grid className={classes.swatch4} container direction="column" justify="flex-start" alignItems="flex-start">
                                <h3>Absent</h3>
                                {(!plantData.distributions.absent)?<span>No entries found.</span>:plantData.distributions.absent?.map((item,i ) => (
                                    <Grid item>
                                        <span key={i}>{item.name}</span>
                                    </Grid>
                                ))}

                                </Grid>
                            </Grid>
                            <Grid item xs={6} md={2} lg={2}>
                                <Grid className={classes.swatch5} container direction="column" justify="flex-start" alignItems="flex-start">
                                <h3>Extinct</h3>
                                {(!plantData.distributions.extinct)?<span>No entries found.</span>:plantData.distributions.extinct?.map((item,i ) => (
                                    <Grid item>
                                        <span key={i}>{item.name}</span>
                                    </Grid>
                                ))}

                                </Grid>
                            </Grid>
                        </Grid>
                     </Paper>
                </section>

                <SectionHeader  
                    heading='Specifications '
                    subtext=''
                />
                     <Paper className={classes.sectionPaper}>
                     <Grid container direction="row" justify="center" alignItems="stretch" spacing={4}>
                            <Grid item xs={6} md={3} lg={3}>
                                <Grid className={classes.specContainer} container direction="column" justify="flex-start" alignItems="flex-start">
                                    <h3>Flowers</h3>
                                    <p>Color: {(plantData.flower.color)?plantData.flower.color:'No record found.'}</p>
                                    <p>Conspicuous: {(plantData.flower.conspicuous)?plantData.flower.conspicuous:'No record found.'}</p>
                                   
                                </Grid>
                            </Grid>
                            <Grid item xs={6} md={3} lg={3}>
                            <Grid className={classes.specContainer} container direction="column" justify="flex-start" alignItems="flex-start">
                                <h3>Foliage</h3>
                                    <p>Texture: {(plantData.foliage.texture)?plantData.foliage.texture:'No record found.'}</p>
                                    <p>Color: {(plantData.foliage.color)?plantData.foliage.color:'No record found.'}</p>
                                    <p>Leaf Retention: {(plantData.foliage.leaf_retention)?plantData.foliage.leaf_retention:'No record found.'}</p>
                                </Grid>
                            </Grid>
                            <Grid item xs={6} md={3} lg={3}>
                                <Grid className={classes.specContainer} container direction="column" justify="flex-start" alignItems="flex-start">
                                    <h3>Fruits/Seeds</h3>
                                    <p>Conspicuous: {(plantData.fruit_or_seed.conspicuous)?plantData.fruit_or_seed.conspicuous:'No record found.'}</p>
                                    <p>Color: {(plantData.fruit_or_seed.color)?plantData.fruit_or_seed.color:'No record found.'}</p>
                                    <p>Shape: {(plantData.fruit_or_seed.shape)?plantData.fruit_or_seed.shape:'No record found.'}</p>
                                    <p>Seed Persistence: {(plantData.fruit_or_seed.seed_persistence)?plantData.fruit_or_seed.seed_persistence:'No record found.'}</p>
                                </Grid>
                            </Grid>
                        </Grid>
                     </Paper>
                <SectionHeader  
                    heading='Sources'
                    subtext=''
                />
                    <Paper className={classes.sectionPaper}>
                        <PlantTable headers={['Name','Last Updated','URL','Citation']} rows={plantData.sources} />
                    </Paper>
             
            </div>
    )
}

PlantPage.propTypes = {
    id: PropTypes.number
}

export default PlantPage


// On Load
// ---------
// useEffect to retrieve plant data by ID and related species 
// Check to see what data differs from plant and species
// ID of page can be passed to component and needs to be stored in URL for on page loads

// Page Sections
// ---------------
// Plant Metadata (General information regarding plant)
// Photo gallery
// Map of areas the plant grows in
// Growing Information
// Scholarly Sources
// Taxonomy Classifications
// Related species or plants (Link to those pages)

// UI
// ---------
// Page will be broken into 12 grid layout
// 3 points are for page nav which includes assess to sections
// 9 points are for the pages content