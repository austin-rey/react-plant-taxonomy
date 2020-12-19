import React from 'react'

import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

import trefle from '../api/trefle'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
}));

const classClick = async (link) => {
    const results = await trefle.get(link);
    console.log(results.data);
}
const Classifications = ({data}) => {
    const classes = useStyles();

    // const [classificationMetaData, setClassificationMetaData] = useState([]);

    // useEffect(() => {
    //   const fetchData = async () => {
    //     const kingdoms = await trefle.get(`/api/v1/kingdoms`)
    //     const subkingdoms = await trefle.get(`/api/v1/subkingdoms`)
    //     const divisions = await trefle.get(`/api/v1/divisions`)
    //     const division_classes = await trefle.get(`/api/v1/division_classes`)
    //     const division_orders = await trefle.get(`/api/v1/division_orders`)
    //     const families = await trefle.get(`/api/v1/families`)
    //     const genus = await trefle.get(`/api/v1/genus`)
    //     const plants = await trefle.get(`/api/v1/plants`)
    //     const species = await trefle.get(`/api/v1/species`)
  
    //     setClassificationMetaData([
    //       {'name':'Kingdoms','totalResults':kingdoms.data.meta.total,'link':kingdoms.data.links.first},
    //       {'name':'Subkingdoms','totalResults':subkingdoms.data.meta.total,'link':subkingdoms.data.links.first}, 
    //       {'name':'Divisions','totalResults':divisions.data.meta.total,'link':divisions.data.links.first}, 
    //       {'name':'Division Classes','totalResults':division_classes.data.meta.total,'link':division_classes.data.links.first}, 
    //       {'name':'Division Orders','totalResults':division_orders.data.meta.total,'link':division_orders.data.links.first}, 
    //       {'name':'Families','totalResults':families.data.meta.total,'link':families.data.links.first}, 
    //       {'name':'Genus','totalResults':genus.data.meta.total,'link':genus.data.links.first},
    //       {'name':'Plants','totalResults':plants.data.meta.total,'link':plants.data.links.first},
    //       {'name':'Species','totalResults':species.data.meta.total,'link':species.data.links.first}
    //     ])
    //   }
  
    //   fetchData();
    // }, [])

    return (
        <div>
             <List className={classes.root}>
                {data.map((classificationItem, i) => (
                <ListItem key={i}>
                    <ListItemText primary={classificationItem.name} secondary={classificationItem.totalResults} />
                    <Button variant="contained" onClick={()=>{classClick(classificationItem.link)}}>Default</Button>
                </ListItem>
                ))}
            </List>
        </div>
    )
}

Classifications.propTypes = {
    data: PropTypes.array
}

export default Classifications
