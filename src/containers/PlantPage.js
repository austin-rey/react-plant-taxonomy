import React, {useEffect,useState,useRef} from 'react'

import {useParams} from "react-router-dom";

import {useFetch} from '../hooks/useFetch'

import PropTypes from 'prop-types'

import PageHeader from '../components/PageHeader';
import SectionHeader from '../components/SectionHeader';
import ImageGallery from '../components/ImageGallery';
import Map from '../components/Map'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';

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
    }
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

                 <section id="section-plant-metadata" className={classes.section} >
                    <SectionHeader  
                        heading='Plant Metadata'
                        subtext=''
                    />
                    <p><b>Author: </b>{plantData.author}</p>
                    <p><b>Family: </b>{plantData.family_common_name}({plantData.family})</p>
                    <p><b>Genus: </b>{plantData.genus}</p>
                    <p><b>Status: </b>{plantData.status}</p>
                    <p><b>Discovered: </b>{plantData.year}</p>
                 </section>
               
                <section id="section-photo-gallery" className={classes.section} >
                    <SectionHeader  
                        heading='Photo Gallery'
                        subtext=''
                    />
                    <ImageGallery imageArray={plantData.images}/>
                </section>

                <section id="section-plant-distribution" className={classes.section} >
                    <SectionHeader  
                        heading='Distribution'
                        subtext=''
                    />

                    <Map names={plantData.distribution}/>
                    <div className={classes.listContainer}>
                        <div className={classes.distributionList}>
                            <h2>Native</h2>
                            <List className={classes.root}>
                                {plantData.distributions.native?.map((item,i ) => (
                                    <>
                                        <ListItem alignItems="flex-start" key={i}>
                                            <ListItemText primary={item.name} secondary={item.species_count}/>
                                        </ListItem>
                                
                                    </>
                                    ))}
                            </List>
                        </div>
                        <div className={classes.distributionList}>
                            <h2>Introduced</h2>
                            <List className={classes.root}>
                                {plantData.distributions.introduced?.map((item,i ) => (
                                    <>
                                        <ListItem alignItems="flex-start" key={i}>
                                            <ListItemText primary={item.name} secondary={item.species_count}/>
                                        </ListItem>
                                
                                    </>
                                    ))}
                            </List>
                        </div>
                        <div className={classes.distributionList}>
                            <h2>Doubtful</h2>
                            <List className={classes.root}>
                                {plantData.distributions.doubtful?.map((item,i ) => (
                                    <>
                                        <ListItem alignItems="flex-start" key={i}>
                                            <ListItemText primary={item.name} secondary={item.species_count}/>
                                        </ListItem>
                                
                                    </>
                                    ))}
                            </List>
                        </div>
                        <div className={classes.distributionList}>
                            <h2>Absent</h2>
                            <List className={classes.root}>
                                {plantData.distributions.absent?.map((item,i ) => (
                                    <>
                                        <ListItem alignItems="flex-start" key={i}>
                                            <ListItemText primary={item.name} secondary={item.species_count}/>
                                        </ListItem>
                                
                                    </>
                                    ))}
                            </List>
                        </div>
                        <div className={classes.distributionList}>
                            <h2>Extinct</h2>
                            <List className={classes.root}>
                                {plantData.distributions.extinct?.map((item,i ) => (
                                    <>
                                        <ListItem alignItems="flex-start" key={i}>
                                            <ListItemText primary={item.name} secondary={item.species_count}/>
                                        </ListItem>
                                
                                    </>
                                    ))}
                            </List>
                        </div>
                    </div>
                </section>

                <SectionHeader  
                    heading='Growing Information'
                    subtext=''
                />
                <SectionHeader  
                    heading='Sources'
                    subtext=''
                />
                <SectionHeader  
                    heading='Related'
                    subtext=''
                />
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