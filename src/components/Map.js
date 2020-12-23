import React from 'react'
import PropTypes from 'prop-types'
import { ComposableMap, Geographies, Geography, Marker, Markers, ZoomableGlobe } from "react-simple-maps";
import { makeStyles } from '@material-ui/core/styles';
import CountryCodes from '../json/CountryCodes.json'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: 'auto'
    },
    mapWrapper : {
        height: 'auto',
        width: "100%",
    }
}));

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";


const Map = ({names}) => {
    const classes = useStyles();

    const displayColorForGeography = geography => {
        if(names.native?.includes(geography.properties.name)) {
            return "green"
        }else if(names.introduced?.includes(geography.properties.name)) {
            return "blue"
        }else if(names.doubtful?.includes(geography.properties.name)) {
            return "orange"
        }else if(names.absent?.includes(geography.properties.name)) {
            return "yellow"
        }else if(names.extinct?.includes(geography.properties.name)) {
            return "red"
        }
        return "#DDD";
    }

    return (
      <div className={classes.root}>
        <ComposableMap
            className={classes.mapWrapper}
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

}

export default Map
