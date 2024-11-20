use ("rifstar");

//Updating universe x44 by adding 4 new galaxies!
db.universes.updateOne(
    {
        _id: "universe-x44"
    },
    {
    $push: { //add
        galaxies: {
            $each: [ //multiple elements!
                { _id: "galaxy-x44-andromeda", name: "Andromeda", coordinate: {x: 224, y: 63, z: 234} },
                { _id: "galaxy-x44-whirlpool", name: "Whirlpool", coordinate: {x: 452, y: 33, z: 230} },
                { _id: "galaxy-x44-sombrero", name: "Sombrero", coordinate: {x: 240, y: 200, z: 40} },
                { _id: "galaxy-x44-triangulum", name: "Triangulum", coordinate: {x: 300, y: 45, z: 66} }
            ]
        }
    }
})

db.universes.updateOne(
    { 
        _id: "universe-x44" 
    },
    {
      $push: {
        "galaxies.$[galaxy].solarSystems": {
          $each: [
            { _id: "solarsystem-x44-andromeda-kepler", name: "Kepler System"},
            { _id: "solarsystem-x44-andromeda-gliese", name: "Gliese System"},
            { _id: "solarsystem-x44-andromeda-wasp", name: "Wasp System"}
          ]
        }
      }
    },
    {
      arrayFilters: [
        { "galaxy._id": "galaxy-x44-andromeda" }
      ]
    }
)

db.universes.updateOne(
    { 
        _id: "universe-x44" 
    },
    {
      $push: {
        "galaxies.$[galaxy].solarSystems": {
            $each: [
                { _id: "solarsystem-x44-sombrero-lyra", name: "Lyra System"},
                { _id: "solarsystem-x44-sombrero-luyten", name: "Luyten System"}
            ]
        }
      }
    },
    {
      arrayFilters: [
        { "galaxy._id": "galaxy-x44-sombrero" }
      ]
    }
)

db.universes.updateOne(
    { 
        _id: "universe-x44" 
    },
    {
      $set: {
        "galaxies.$[galaxy].solarSystems.$[solarsystem].centralCelestial": {
            _id: String("celestial-x44-sombrero-lyra-lyra"),
            name: String("Lyra"),
            type: String("star"),
            orbitingCelestials: []
        }
      }
    },
    {
      arrayFilters: [
        { "galaxy._id": "galaxy-x44-sombrero" },
        { "solarsystem._id": "solarsystem-x44-sombrero-lyra" }
      ]
    }
)

db.universes.updateOne(
    { 
        _id: "universe-x44" 
    },
    {
      $set: {
        "galaxies.$[galaxy].solarSystems.$[solarsystem].centralCelestial": {
            _id: String("celestial-x44-sombrero-luyten-luyten"),
            name: String("Luyten"),
            type: String("star"),
            orbitingCelestials: []
        }
      }
    },
    {
      arrayFilters: [
        { "galaxy._id": "galaxy-x44-sombrero" },
        { "solarsystem._id": "solarsystem-x44-sombrero-luyten" }
      ]
    }
)


db.universes.updateOne(
    { 
        _id: "universe-x44" 
    },
    {
      $set: {
        "galaxies.$[galaxy].solarSystems.$[solarsystem].centralCelestial": {
            _id: String("celestial-x44-andromeda-kepler-kepler"),
            name: String("Kepler"),
            diameter: NumberInt('10986600'),
            type: String("star"),
            orbitingCelestials: [
                {
                    _id: String("celestial-x44-andromeda-kepler-ari"),
                    name: String("Ari"),
                    type: String("planet"),
                    orbitingCelestials: []
                },
                {
                    _id: String("celestial-x44-andromeda-kepler-vex"),
                    name: String("Vex"),
                    type: String("planet"),
                    orbitingCelestials: []
                },
                {
                    _id: String("celestial-x44-andromeda-kepler-nazla"),
                    name: String("Nazla"),
                    type: String("planet"),
                    orbitingCelestials: []
                },
                {
                    _id: String("celestial-x44-andromeda-kepler-orion"),
                    name: String("Orion"),
                    type: String("planet"),
                    orbitingCelestials: []
                }
            ]
        }
      }
    },
    {
      arrayFilters: [
        { "galaxy._id": "galaxy-x44-andromeda" },
        { "solarsystem._id": "solarsystem-x44-andromeda-kepler" }
      ]
    }
)


db.universes.updateOne(
    { 
        _id: "universe-x44" 
    },
    {
      $push: {
        "galaxies.$[galaxy].solarSystems.$[solarsystem].centralCelestial.orbitingCelestials": {
            $each: [
                {
                    _id: String("celestial-x44-sombrero-lyra-amla"),
                    name: String("Amla"),
                    type: String("planet"),
                    orbitingCelestials: []
                },
                {
                    _id: String("celestial-x44-sombrero-lyra-ozer"),
                    name: String("Ozer"),
                    type: String("planet"),
                    orbitingCelestials: []
                },
                {
                    _id: String("celestial-x44-sombrero-lyra-flora"),
                    name: String("Flora"),
                    type: String("planet"),
                    orbitingCelestials: [
                        {
                            _id: String("celestial-x44-sombrero-lyra-vexa"),
                            name: String("Vexa Imager"),
                            type: String("satellite")
                        },
                        {
                            _id: String("celestial-x44-sombrero-lyra-fps"),
                            name: String("Flora Positioning System"),
                            type: String("satellite")
                        },
                        {
                            _id: String("celestial-x44-sombrero-lyra-rss"),
                            name: String("Research Space Station"),
                            type: String("station")
                        },
                        {
                            _id: String("celestial-x44-sombrero-lyra-ryn"),
                            name: String("Ryn"),
                            type: String("moon")
                        },
                        {
                            _id: String("celestial-x44-sombrero-lyra-ava"),
                            name: String("Ava"),
                            type: String("moon")
                        },
                        {
                            _id: String("celestial-x44-sombrero-lyra-ora"),
                            name: String("Ora"),
                            type: String("moon")
                        },
                        {
                            _id: String("celestial-x44-sombrero-lyra-kry"),
                            name: String("Kry"),
                            type: String("moon")
                        }
                    ]
                },
                {
                    _id: String("celestial-x44-sombrero-lyra-atom"),
                    name: String("Atom"),
                    type: String("planet"),
                    orbitingCelestials: []
                },
                {
                    _id: String("celestial-x44-sombrero-lyra-pax"),
                    name: String("Pax"),
                    type: String("planet"),
                    orbitingCelestials: []
                }
            ]
        }
      }
    },
    {
      arrayFilters: [
        { "galaxy._id": "galaxy-x44-sombrero" },
        { "solarsystem._id": "solarsystem-x44-sombrero-lyra" }
      ]
    }
)

db.universes.updateOne(
    { 
        _id: "universe-x44" 
    },
    {
      $push: {
        "galaxies.$[galaxy].solarSystems.$[solarsystem].centralCelestial.orbitingCelestials": {
            $each: [
                {
                    _id: String("celestial-x44-sombrero-luyten-aura"),
                    name: String("Aura"),
                    type: String("planet"),
                    orbitingCelestials: []
                },
                {
                    _id: String("celestial-x44-sombrero-luyten-pyra"),
                    name: String("Pyra"),
                    type: String("planet"),
                    orbitingCelestials: []
                },
                {
                    _id: String("celestial-x44-sombrero-luyten-arlua"),
                    name: String("Arlua"),
                    type: String("planet"),
                    orbitingCelestials: []
                },
                {
                    _id: String("celestial-x44-sombrero-luyten-terra"),
                    name: String("Terra"),
                    type: String("planet"),
                    orbitingCelestials: []
                }
            ]
        }
      }
    },
    {
      arrayFilters: [
        { "galaxy._id": "galaxy-x44-sombrero" },
        { "solarsystem._id": "solarsystem-x44-sombrero-luyten" }
      ]
    }
)


db.nations.updateOne(
  {
    _id: "nation-human"
  },
  {
    $set: { "markedLocations.$[location].description": "Banking Capital" }
  },
  {
    arrayFilters: [ { "location.interestPoint": "interestpoint-x44-milkyway-solar-earth-zürich" } ]
  }
)

//Fixating the the values over 600 to 600
db.currencies.updateMany(
  {
    value: { $gt: 600 }
  },
  {
    $set: { "value": Decimal128('600') }
  }
)
