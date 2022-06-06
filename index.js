const express = require('express');
const app = express();

const PORT = 8000;
const honeyBeeSpecies = {
  'western' : {
    name: "Western Honey Bee",
    latin: 'apis Mellifera',
    description: '',
  },
  'dark' : {
    name: "Dark Honey Bee",
    latin: 'apis Mellifera Mellifera',
    description: '',
  },
  'unknown' : {
    error: "bee not found"
  },
}

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html')
});

app.get('/api', (request,response) => {
  const removeUnknown = Object.entries(honeyBeeSpecies)
   .filter( ([key,value]) => key !== 'unknown')
  response.json( Object.fromEntries(removeUnknown) )
})

app.get('/api/:species', (request, response) => {
  const species = request.params.species.toLowerCase();
  honeyBeeSpecies[species] ?
    response.json(honeyBeeSpecies[species]) :
    response.json(honeyBeeSpecies["unknown"]);
})

app.listen(process.env.PORT || PORT, () => {
  console.log('Displaying hive info to port:', PORT)
})