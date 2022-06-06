const express = require('express');
const app = express();

const PORT = 8000;
// placeholder data copied from https://homesteading.com/types-honey-bees/
const honeyBeeSpecies = {
  'western' : {
    'name': "Western or European Honey Bee",
    'latin': 'Apis Mellifera',
    'difficulty level': 'Beginner',
    'description': `
    The Apis Mellifera is ideal for beginner beekeepers looking into domesticated bee species. They are famous for their yellow-striped abdomens and their tendency to build large colonies, even in the wild.

    These bee species have been popular for centuries now. This led to evolution fitting the needs of raising domesticated bees.

    For example, the Apis Mellifera is not as aggressive as other types of honey bees and they are able to produce an impressively large amount of honey regularly. On top of that, they have developed a certain resiliency against human environments.`,
  },
  'german' : {
    'name': "German Honey Bee",
    'latin': 'Apis Mellifera Mellifera',
    'difficulty level': 'Expert',
    'description': `The Apis Mellifera Mellifera is one of the younger types of honey bees in Europe. In fact, they only arrived during the Ice Age, which is about 2.4 million years ago. On the other hand, research states that ancestors of modern honey bees can be traced back to more than a hundred million years ago!

    These bees are characterized by their small, stump body. Plus, beekeepers would be surprised to know that pure Apis Mellifera Mellifera bees have a hint of yellow. Their bodies are colored in either jet black or dark brown.

    Sadly, these types of honey bees are quite rare. And if you do manage to find a swarm of them, you’d find it hard to control them as they are quite aggressive in nature.
    `

  },
  'italian' : {
    'name': "Italian Honey Bee",
    'latin': 'Apis Mellifera Ligustica',
    'difficulty level': 'Beginner',
    'description': `The Apis Mellifera Ligustica is a variety of the Apis Mellifera and is the most popular honey bee species in North America. Residents love the Apis Mellifera Liguistica for their gentle nature and high honey production. These combined make them one of the best choices for beekeeping.

    Plus, they have a very beautiful aesthetic. Apis Mellifera Liguistica is characterized by its bright gold body covered in deep black stripes.

    However, they tend to stray from the beehive. That’s why beekeepers would have to keep an eye on them to ensure they don’t get lost.

    Despite their tendency to wander off, they dislike traveling long distances for food, so beekeepers would have to surround the bees with all kinds of nectar-filled flowers.`,
  },
  'gray' : {
    'name': "Gray or Carniolan Honey Bee",
    'latin': 'Apis Mellifera Carnica',
    'difficulty level': 'Beginner',
    'description': `The Apis Mellifera Carnica is a great option for beginner beekeepers who are worried about handling aggressive bees because they are very mild-natured. They are very easy to work with, even without using the smoker too often.

    On top of that, they are able to survive the winter without downsizing in colony size. You might even be able to harvest a few jars of honey over the colder months.

    Perhaps the only issue here is that during their colony size drastically increases once spring comes. This leaves one prone to swarming.`,
  },
  'himalayan' : {
    'name': "Himalayan Honey Bee",
    'latin': 'Apis Cerana',
    'difficulty level': 'Beginner',
    'description': `The Apis Cerana is the dominating bee species in various parts of Asia. These types of honey bees are common in countries such as Indonesia, Japan, the Philippines, and Malaysia, among others.

    What makes these bees unique is their resilience to weather changes and various diseases. Since the Apis Cerana is relatively small, many companies chose to import European honey bees into Asia in order to boost honey production.

    This led to an influx of diseases. However, instead of dying out, the Apis Cerana adapted by becoming more hygienic. In fact, they are one of the only types of honey bees that frequently renew wax brood combs.

    Plus, they are far less susceptible to diseases induced by weather changes. They can survive harsh winters and blazing-hot summers with ease.`,
  },
  'gibraltar' : {
    'name': "Gibraltar Honey Bee",
    'latin': 'Apis Mellifera Iberiensis',
    'difficulty level': 'Expert',
    'description': `What makes the Apis Mellifera Iberiensis so cool is that they have managed to keep their bloodline pure and clean for millions of years now. In fact, they refuse to mate with any queen that doesn’t share their genes.

    Note, however, that Apis Mellifera Iberiensis bees are notorious for their unique defense technique. When their territory is intruded, they send out a troop of guard bees to patrol the area and attack everything deemed to be a threat.

    So if you plan to catch them in the wild, be prepared. Wear the correct equipment or you’ll end up with a body full of stings and blisters rather than a hive full of bees.`,
  },
  'caucasian' : {
    'name': "Caucasian Honey Bee",
    'latin': 'Apis Mellifera Caucasica',
    'difficulty level': 'Experienced',
    'description': `The Apis Mellifera Caucasica is a large bee species characterized by the gray hair covering their entire bodies. You’ll also notice that this type of honey bee tends to have a sticky beehive. This is the result of excess propolis production.

    Overall, however, we wouldn’t recommend the Apis Mellifera Caucasica to beginners. Firstly, they are prone to infections. You’d have to check up on them at least once a month to ensure they aren’t showing signs and symptoms of any disease.

    Secondly, they are quite aggressive. Even with a bee smoker, it would take a few minutes for these bees to settle down, especially if they get riled up and threatened.

Lastly, they are relatively slow in building their colony. Only an experienced beekeeper would be able to stimulate procreation and honey production.`,
  },
}

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html')
});

app.get('/api', (request,response) => {
  response.json(honeyBeeSpecies)
})

app.get('/api/:species', (request, response) => {
  const species = request.params.species.toLowerCase();
  honeyBeeSpecies[species] ?
    response.json(honeyBeeSpecies[species]) :
    response.status(404).end();
})

app.listen(process.env.PORT || PORT, () => {
  console.log('Displaying hive info to port:', PORT)
})