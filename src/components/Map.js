import React from 'react'
import PropTypes from 'prop-types'

import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import { makeStyles } from '@material-ui/core/styles';

import topoMap from '../json/topoMapLevel3.json';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: 'auto',
        backgroundColor: '#F9F7DB',
        borderRadius: '5px'
    },
}));


const Map = ({names}) => {
    const classes = useStyles();

    const displayColorForGeography = geography => {
        if(names.native?.includes(geography.properties.name)) {
            return "#ED6A5A"
        }else if(names.introduced?.includes(geography.properties.name)) {
            return "#5D576B"
        }else if(names.doubtful?.includes(geography.properties.name)) {
            return "#F58B51"
        }else if(names.absent?.includes(geography.properties.name)) {
            return "#9BC1BC"
        }else if(names.extinct?.includes(geography.properties.name)) {
            return "#8AAE6F "
        }
        // return "#E3BF95";
    }

    return (
      <div className={classes.root}>
        <ComposableMap
            projectionConfig={{scale: 175, center: [18,0]}}
            width={800}
            height={600}
            projection={'geoEqualEarth'}
        >
           <Geographies geography={'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'}>
            {({ geographies, projection }) =>
                geographies
                .map((geo,i) => (
                    <Geography
                    key={i}
                    geography={geo}
                    projection={projection}
                    fill="#E3BF95"
                    stroke="#F9F7DB"
                    style={{
                        default: {
                            fill: displayColorForGeography(geo),
                            outline: "none"
                        },
                        hover: {
                            fill: displayColorForGeography(geo),
                            outline: "none"
                        },
                        pressed: {
                            fill: displayColorForGeography(geo),
                            outline: "none"
                        },
                        }}
                    />
                ))
            }
            </Geographies>
        </ComposableMap>
     
      </div>
    )
}

Map.propTypes = {
    names: PropTypes.array
}

export default Map
