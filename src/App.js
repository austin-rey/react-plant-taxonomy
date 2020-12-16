import {useState, useEffect} from 'react';

import Classifications from './containers/Classifications';

import trefle from './api/trefle'
import './App.css';

function App() {

  const [classificationMetaData, setClassificationMetaData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const kingdoms = await trefle.get(`/api/v1/kingdoms`)
      const subkingdoms = await trefle.get(`/api/v1/subkingdoms`)
      const divisions = await trefle.get(`/api/v1/divisions`)
      const division_classes = await trefle.get(`/api/v1/division_classes`)
      const division_orders = await trefle.get(`/api/v1/division_orders`)
      const families = await trefle.get(`/api/v1/families`)
      const genus = await trefle.get(`/api/v1/genus`)
      const plants = await trefle.get(`/api/v1/plants`)
      const species = await trefle.get(`/api/v1/species`)

      setClassificationMetaData([
        {'name':'Kingdoms','totalResults':kingdoms.data.meta.total,'link':kingdoms.data.links.first},
        {'name':'Subkingdoms','totalResults':subkingdoms.data.meta.total,'link':subkingdoms.data.links.first}, 
        {'name':'Divisions','totalResults':divisions.data.meta.total,'link':divisions.data.links.first}, 
        {'name':'Division Classes','totalResults':division_classes.data.meta.total,'link':division_classes.data.links.first}, 
        {'name':'Division Orders','totalResults':division_orders.data.meta.total,'link':division_orders.data.links.first}, 
        {'name':'Families','totalResults':families.data.meta.total,'link':families.data.links.first}, 
        {'name':'Genus','totalResults':genus.data.meta.total,'link':genus.data.links.first},
        {'name':'Plants','totalResults':plants.data.meta.total,'link':plants.data.links.first},
        {'name':'Species','totalResults':species.data.meta.total,'link':species.data.links.first}
      ])

   
    }

    fetchData();
  }, [])
  console.log(classificationMetaData);
  return (
    <div className="App">
      <h1>Plant Taxonomy</h1>
      <Classifications data={classificationMetaData} />
    </div>
  );
}

export default App;

