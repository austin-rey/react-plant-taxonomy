import React from 'react'
import PropTypes from 'prop-types'

import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import {Grid,Paper} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: 'auto'
    },
}));

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";


const Map = ({names}) => {
    const classes = useStyles();

    const displayColorForGeography = geography => {
        if(names.native?.includes(geography.properties.name)) {
            return "#ED6A5A"
        }else if(names.introduced?.includes(geography.properties.name)) {
            return "#5D576B"
        }else if(names.doubtful?.includes(geography.properties.name)) {
            return "#e6a969"
        }else if(names.absent?.includes(geography.properties.name)) {
            return "#9BC1BC"
        }else if(names.extinct?.includes(geography.properties.name)) {
            return "#8AAE6F "
        }
        return "#DDD";
    }

    return (
      <div className={classes.root}>
        <ComposableMap
            projectionConfig={{scale: 175, center: [18,0]}}
            width={800}
            height={600}
        >
           <Geographies geography={geoUrl}>
            {({ geographies, projection }) =>
                geographies
                .map((geo,i) => (
                    <Geography
                    key={i}
                    geography={geo}
                    projection={projection}
                    fill="#DDD"
                    stroke="#FFF"
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
