import React, {useEffect,useState} from 'react'

import {useParams} from "react-router-dom"

import {useFetch} from '../hooks/useFetch'

import PropTypes from 'prop-types'

import SectionHeader from '../components/SectionHeader'
import ImageGallery from '../components/ImageGallery'
import Map from '../components/Map'
import PlantTable from '../components/Table'

import {Paper,Grid } from '@material-ui/core/'

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
    swatch3:{backgroundColor:'#F58B51',color:'#fff',padding: '10px',height: '100%', borderRadius: '5px'},
    swatch4:{backgroundColor:'#9BC1BC',color:'#fff',padding: '10px',height: '100%', borderRadius: '5px'},
    swatch5:{backgroundColor:'#8AAE6F',color:'#fff',padding: '10px',height: '100%', borderRadius: '5px'},
    swatch6: {
        backgroundColor:'#F9F7DB',color:'#333',padding: '10px',height: '100%', borderRadius: '5px',marginBottom: '5px'
    },
    swatchContainer: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(1)
    },
    headingImageContainer: {
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
    w100: {
        width: '100%'
    }
}));
const PlantPage = () => {
    const classes = useStyles();

    let { id } = useParams();

    const { data: plantData, loading, error } = useFetch(
        `/api/v1/species/${id}`,
        []
    );

    console.log(plantData);
    return ((loading) 
            ? <h1>Loading</h1>
            : <div>
                
                 <section id="section-plant-general-information" className={classes.section} >

                    <Paper className={classes.sectionPaper} elevation={0}>
                    <h1>{plantData.common_name} - {plantData.scientific_name}</h1>
                       
                        <Grid container direction="row" justify="flex-start" wrap="wrap" alignItems="stretch" spacing={1}>
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <Grid container className={classes.headingImageContainer} >
                                    <img className={classes.headingImage} src={(plantData.image_url)?plantData.image_url:'/images/card-placeholder-305x240.png'} alt={`Image of a ${plantData.scientific_name}`}/>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={6} md={8} lg={9}>
                                <Grid container direction="column" justify="flex-start" alignItems="stretch">
                                    <Grid className={classes.swatch6}>
                                        <p><strong>Rank</strong> - {plantData.rank}</p>
                                    </Grid>
                                    <Grid className={classes.swatch6} item>
                                        <p><strong>Family</strong> - {plantData.family_common_name}</p>
                                    </Grid>
                                    <Grid className={classes.swatch6}>
                                        <p><strong>Genus</strong> - {plantData.genus}</p>
                                    </Grid>
                                    <Grid className={classes.swatch6}>
                                        <p><strong>Status</strong> - {plantData.status}</p>
                                    </Grid>
                                    <Grid className={classes.swatch6}>
                                        <p><strong>Discovered</strong> - {plantData.year}</p>
                                    </Grid>

                                    
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                 </section>

                <section id="section-plant-distribution" className={classes.section} >

                    <Paper className={classes.sectionPaper} elevation={0}>
                    <SectionHeader  
                        heading='Distribution'
                        subtext='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
                    />
                        <Map names={plantData.distribution}/>
                        <Grid container direction="column" justify="center" alignItems="stretch" spacing={1} className={classes.swatchContainer}>
                            <Grid item>
                                <Grid className={classes.swatch1} container direction="row" justify="flex-start" alignItems="flex-start">
                                <h3 className={classes.w100}>Native</h3>
                                {(!plantData.distributions.native)?<p>No entries found.</p>:  plantData.distributions.native?.map((item,i ) => (
                                    <Grid item>
                                        <p key={i}>{item.name}</p>
                                    </Grid>
                                ))}
                              
                                </Grid>
                            </Grid>
                            <Grid item >
                                <Grid className={classes.swatch2} container direction="row" justify="flex-start" alignItems="flex-start">
                                <h3 className={classes.w100}>Introduced</h3>
                                {(!plantData.distributions.introduced)?<p>No entries found.</p>:plantData.distributions.introduced?.map((item,i ) => (
                                    <Grid item>
                                       <p key={i}>{item.name}</p>
                                    </Grid>
                                ))}
         
                                </Grid>
                            </Grid>
                            <Grid item >
                                <Grid className={classes.swatch3} container direction="row" justify="flex-start" alignItems="flex-start">
                                <h3 className={classes.w100}>Doubtful</h3>
                                {(!plantData.distributions.doubtful)?<p>No entries found.</p>:plantData.distributions.doubtful?.map((item,i ) => (
                                    <Grid item>
                                       <p key={i}>{item.name}</p>
                                    </Grid>
                                ))}

                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid className={classes.swatch4} container direction="row" justify="flex-start" alignItems="flex-start">
                                <h3 className={classes.w100}>Absent</h3>
                                    <Grid item>
                                        <Grid container>
                                        {(!plantData.distributions.absent)?<p>No entries found.</p>:plantData.distributions.absent?.map((item,i ) => (
                                        <Grid item>
                                            <p key={i}>{item.name}</p>
                                        </Grid>
                                    ))}
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid className={classes.swatch5} container direction="column" justify="flex-start" alignItems="flex-start">
                                <h3>Extinct</h3>
                                {(!plantData.distributions.extinct)?<p>No entries found.</p>:plantData.distributions.extinct?.map((item,i ) => (
                                    <Grid item>
                                        <p key={i}>{item.name}</p>
                                    </Grid>
                                ))}

                                </Grid>
                            </Grid>
                        </Grid>
                     </Paper>
                </section>

                <section id="section-photo-gallery" className={classes.section} >
                  
                     <Paper className={classes.sectionPaper} elevation={0}>
                     <SectionHeader  
                        heading='Photo Gallery'
                        subtext='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    />
                        <ImageGallery imageArray={plantData.images}/>
                     </Paper>
                    
                </section>
                <section id="section-qualities" className={classes.section} >
                    <Paper className={classes.sectionPaper} elevation={0}>
                    <SectionHeader  
                        heading='Qualities'
                        subtext='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    />
                        <Grid container direction="row" justify="center" alignItems="stretch" spacing={2}>
                            <Grid item xs={6} md={3} lg={3}>
                                <Grid className={classes.swatch6} container direction="column" justify="flex-start" alignItems="flex-start">
                                    <h3>Flowers</h3>
                                    <p>Color: {(plantData.flower.color)?plantData.flower.color:'No record found.'}</p>
                                    <p>Conspicuous: {(plantData.flower.conspicuous)?plantData.flower.conspicuous:'No record found.'}</p>
                                    
                                </Grid>
                            </Grid>
                            <Grid item xs={6} md={3} lg={3}>
                                <Grid className={classes.swatch6} container direction="column" justify="flex-start" alignItems="flex-start">
                                    <h3>Foliage</h3>
                                        <p>Texture: {(plantData.foliage.texture)?plantData.foliage.texture:'No record found.'}</p>
                                        <p>Color: {(plantData.foliage.color)?plantData.foliage.color:'No record found.'}</p>
                                        <p>Leaf Retention: {(plantData.foliage.leaf_retention)?plantData.foliage.leaf_retention:'No record found.'}</p>
                                </Grid>
                            </Grid>
                            <Grid item xs={6} md={3} lg={3}>
                                <Grid className={classes.swatch6} container direction="column" justify="flex-start" alignItems="flex-start">
                                    <h3>Fruits/Seeds</h3>
                                    <p>Conspicuous: {(plantData.fruit_or_seed.conspicuous)?plantData.fruit_or_seed.conspicuous:'No record found.'}</p>
                                    <p>Color: {(plantData.fruit_or_seed.color)?plantData.fruit_or_seed.color:'No record found.'}</p>
                                    <p>Shape: {(plantData.fruit_or_seed.shape)?plantData.fruit_or_seed.shape:'No record found.'}</p>
                                    <p>Seed Persistence: {(plantData.fruit_or_seed.seed_persistence)?plantData.fruit_or_seed.seed_persistence:'No record found.'}</p>
                                </Grid>
                            </Grid>
                            {/* <Grid item xs={6} md={3} lg={3}>
                                <Grid className={classes.swatch6} container direction="column" justify="flex-start" alignItems="flex-start">
                                    <h3>Specifications</h3>

                                    <p>Ligneous Type: {(plantData.specifications.ligneous_type)?plantData.specifications.ligneous_type:'No record found.'}</p>
                                    <p>Growth Form: {(plantData.specifications.growth_form)?plantData.specifications.growth_form:'No record found.'}</p>
                                    <p>Growth Habit: {(plantData.specifications.growth_habit)?plantData.specifications.growth_habit:'No record found.'}</p>
                                    <p>Growth Rate: {(plantData.specifications.growth_rate)?plantData.specifications.growth_rate:'No record found.'}</p>
                                    <p>Average Height: {(plantData.specifications.average_height?.cm)?plantData.average_height.cm+"cm":'No record found.'}</p>
                                    <p>Maximum Height: {(plantData.specifications.maximum_height.cm)?plantData.specifications.maximum_height.cm:'No record found.'}</p>
                                    <p>Nitrogen Fixation: {(plantData.specifications.nitrogen_fixation)?plantData.specifications.nitrogen_fixation:'No record found.'}</p>
                                    <p>Shape and Orientation: {(plantData.specifications.shape_and_orientation)?plantData.specifications.shape_and_orientation:'No record found.'}</p>
                                    <p>Toxicity: {(plantData.specifications.toxicity)?plantData.specifications.toxicity:'No record found.'}</p>
                                </Grid>
                            </Grid> */}
                            {/* <Grid item xs={6} md={3} lg={3}>
                                <Grid className={classes.swatch6} container direction="column" justify="flex-start" alignItems="flex-start">
                                    <h3>Growth</h3>

                                    <p>Description: {(plantData.growth.description)?plantData.growth.description:'No record found.'}</p>
                                    <p>Sowing: {(plantData.growth.sowing)?plantData.growth.sowing:'No record found.'}</p>
                                    <p>Days to Harvest: {(plantData.growth.days_to_harvest)?plantData.growth.days_to_harvest:'No record found.'}</p>
                                    <p>Row Spacing: {(plantData.growth.row_spacing.cm)?plantData.growth.row_spacing.cm+"cm":'No record found.'}</p>
                                    <p>Spread: {(plantData.growth.spread.cm)?plantData.growth.spread.cm+"cm":'No record found.'}</p>
                                    <p>PH Maximum: {(plantData.growth.ph_maximum)?plantData.growth.ph_maximum:'No record found.'}</p>
                                    <p>PH Minimum: {(plantData.growth.ph_minimum)?plantData.growth.ph_minimum:'No record found.'}</p>
                                    <p>Light: {(plantData.growth.light)?plantData.growth.light:'No record found.'}</p>
                                    <p>Atmospheric Humidity: {(plantData.growth.atmospheric_humidity)?plantData.growth.atmospheric_humidity:'No record found.'}</p>
                                    <p>Growth Months: {(plantData.growth.growth_months)?plantData.growth.growth_months:'No record found.'}</p>
                                    <p>Bloom Months: {(plantData.growth.bloom_months)?plantData.growth.bloom_months:'No record found.'}</p>
                                    <p>Fruit Months: {(plantData.growth.fruit_months)?plantData.growth.fruit_months:'No record found.'}</p>
                                    <p>Minimum Precipitation: {(plantData.growth.minimum_precipitation.mm)?plantData.growth.minimum_precipitation.mm+"mm":'No record found.'}</p>
                                    <p>Maximum Precipitation: {(plantData.growth.maximum_precipitation.mm)?plantData.growth.maximum_precipitation.mm+"mm":'No record found.'}</p>
                                    <p>Minimum Root Depth: {(plantData.growth.minimum_root_depth.cm)?plantData.growth.minimum_root_depth.cm+"cm":'No record found.'}</p>
                                    <p>Minimum Temperature: {(plantData.growth.minimum_temperature.def_f)?plantData.growth.minimum_temperature.def_f+"f":'No record found.'}</p>
                                    <p>Maximum Temperature: {(plantData.growth.maximum_temperature.def_f)?plantData.growth.maximum_temperature.def_f+"f":'No record found.'}</p>
                                    <p>Soil Nutriments: {(plantData.growth.soil_nutriments)?plantData.growth.soil_nutriments:'No record found.'}</p>
                                    <p>Soil Salinity: {(plantData.growth.soil_salinity)?plantData.growth.soil_salinity:'No record found.'}</p>
                                    <p>Soil Texture: {(plantData.growth.soil_texture)?plantData.growth.soil_texture:'No record found.'}</p>
                                    <p>Soil Humidity: {(plantData.growth.soil_humidity)?plantData.growth.soil_humidity:'No record found.'}</p>
                                    
                                </Grid>
                            </Grid> */}
                        </Grid>
                     </Paper>
              </section>
              <section id="section-sources" className={classes.section} >
                    <Paper className={classes.sectionPaper} elevation={0}>
                    <SectionHeader  
                        heading='Sources'
                        subtext='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    />
                        <PlantTable headers={['Name','Last Updated','URL','Citation']} rows={plantData.sources} className={classes.swatch6} />
                    </Paper>
                    </section>
             
            </div>
    )
}

PlantPage.propTypes = {
    id: PropTypes.number
}

export default PlantPage