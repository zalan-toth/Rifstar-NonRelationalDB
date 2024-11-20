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
            diameter: NumberInt('99112345'),
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
            diameter: NumberInt('20567300'),
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
                    orbitDistance: Decimal128('17.2E7'),
                    sol: Decimal128('5556.1'),
                    hoursPerSol: Decimal128('3.5'),
                    mass: Decimal128('4.556E22'),
                    diameter: NumberInt('5561'),
                    orbitingCelestials: []
                },
                {
                    _id: String("celestial-x44-andromeda-kepler-vex"),
                    name: String("Vex"),
                    type: String("planet"),
                    orbitDistance: Decimal128('66.3E7'),
                    sol: Decimal128('425.1'),
                    hoursPerSol: Decimal128('56'),
                    mass: Decimal128('8.223E22'),
                    diameter: NumberInt('13451'),
                    orbitingCelestials: []
                },
                {
                    _id: String("celestial-x44-andromeda-kepler-nazla"),
                    name: String("Nazla"),
                    type: String("planet"),
                    orbitDistance: Decimal128('2.2E9'),
                    sol: Decimal128('889.7'),
                    hoursPerSol: Decimal128('678.4'),
                    mass: Decimal128('2.1E20'),
                    diameter: NumberInt('10981'),
                    orbitingCelestials: []
                },
                {
                    _id: String("celestial-x44-andromeda-kepler-orion"),
                    name: String("Orion"),
                    type: String("planet"),
                    orbitDistance: Decimal128('53.7E9'),
                    sol: Decimal128('34.6'),
                    hoursPerSol: Decimal128('7764.5'),
                    mass: Decimal128('4.643E23'),
                    diameter: NumberInt('54501'),
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
                    orbitDistance: Decimal128('6.5E8'),
                    sol: Decimal128('382.25'),
                    hoursPerSol: Decimal128('23.5'),
                    mass: Decimal128('8.87E20'),
                    diameter: NumberInt('17003'),
                    orbitingCelestials: []
                },
                {
                    _id: String("celestial-x44-sombrero-lyra-ozer"),
                    name: String("Ozer"),
                    type: String("planet"),
                    orbitDistance: Decimal128('2.24E9'),
                    sol: Decimal128('1402'),
                    hoursPerSol: Decimal128('10.3'),
                    mass: Decimal128('1.66E21'),
                    diameter: NumberInt('44700'),
                    orbitingCelestials: []
                },
                {
                    _id: String("celestial-x44-sombrero-lyra-flora"),
                    name: String("Flora"),
                    type: String("planet"),
                    orbitDistance: Decimal128('6.2E9'),
                    sol: Decimal128('111.25'),
                    hoursPerSol: Decimal128('66.7'),
                    mass: Decimal128('6.87E21'),
                    diameter: NumberInt('28090'),
                    orbitingCelestials: [
                        {
                            _id: String("celestial-x44-sombrero-lyra-vexa"),
                            name: String("Vexa Imager"),
                            type: String("satellite"),
                            orbitDistance: Decimal128('460')
                        },
                        {
                            _id: String("celestial-x44-sombrero-lyra-fps"),
                            name: String("Flora Positioning System"),
                            type: String("satellite"),
                            orbitDistance: Decimal128('459')
                        },
                        {
                            _id: String("celestial-x44-sombrero-lyra-rss"),
                            name: String("Research Space Station"),
                            type: String("station"),
                            orbitDistance: Decimal128('470')
                        },
                        {
                            _id: String("celestial-x44-sombrero-lyra-ryn"),
                            name: String("Ryn"),
                            type: String("moon"),
                            orbitDistance: Decimal128('390020'),
                            sol: Decimal128('10'),
                            hoursPerSol: Decimal128('9.91'),
                            mass: Decimal128('1.1E12'),
                            diameter: NumberInt('803')
                        },
                        {
                            _id: String("celestial-x44-sombrero-lyra-ava"),
                            name: String("Ava"),
                            type: String("moon"),
                            orbitDistance: Decimal128('963000'),
                            sol: Decimal128('56'),
                            hoursPerSol: Decimal128('3.22'),
                            mass: Decimal128('3.2E12'),
                            diameter: NumberInt('1450')
                        },
                        {
                            _id: String("celestial-x44-sombrero-lyra-ora"),
                            name: String("Ora"),
                            type: String("moon"),
                            orbitDistance: Decimal128('1677210'),
                            sol: Decimal128('321'),
                            hoursPerSol: Decimal128('340.1'),
                            mass: Decimal128('6.1E9'),
                            diameter: NumberInt('1056')
                        },
                        {
                            _id: String("celestial-x44-sombrero-lyra-kry"),
                            name: String("Kry"),
                            type: String("moon"),
                            orbitDistance: Decimal128('3669120'),
                            sol: Decimal128('127'),
                            hoursPerSol: Decimal128('2.99'),
                            mass: Decimal128('5.7E8'),
                            diameter: NumberInt('2289')
                        }
                    ]
                },
                {
                    _id: String("celestial-x44-sombrero-lyra-atom"),
                    name: String("Atom"),
                    type: String("planet"),
                    orbitDistance: Decimal128('2.2E10'),
                    sol: Decimal128('888.37'),
                    hoursPerSol: Decimal128('1039.5'),
                    mass: Decimal128('1.2E22'),
                    diameter: NumberInt('99910'),
                    orbitingCelestials: []
                },
                {
                    _id: String("celestial-x44-sombrero-lyra-pax"),
                    name: String("Pax"),
                    type: String("planet"),
                    orbitDistance: Decimal128('1.88E11'),
                    sol: Decimal128('120'),
                    hoursPerSol: Decimal128('16.8'),
                    mass: Decimal128('3.2E21'),
                    diameter: NumberInt('19574'),
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
                    orbitDistance: Decimal128('1.77E12'),
                    sol: Decimal128('46'),
                    hoursPerSol: Decimal128('1.2'),
                    mass: Decimal128('1.2E22'),
                    diameter: NumberInt('3340'),
                    orbitingCelestials: []
                },
                {
                    _id: String("celestial-x44-sombrero-luyten-pyra"),
                    name: String("Pyra"),
                    type: String("planet"),
                    orbitDistance: Decimal128('6.87E12'),
                    sol: Decimal128('800'),
                    hoursPerSol: Decimal128('60'),
                    mass: Decimal128('1.6E22'),
                    diameter: NumberInt('7779'),
                    orbitingCelestials: []
                },
                {
                    _id: String("celestial-x44-sombrero-luyten-arlua"),
                    name: String("Arlua"),
                    type: String("planet"),
                    orbitDistance: Decimal128('3.88E13'),
                    sol: Decimal128('403'),
                    hoursPerSol: Decimal128('7.54'),
                    mass: Decimal128('3.1E22'),
                    diameter: NumberInt('8910'),
                    orbitingCelestials: []
                },
                {
                    _id: String("celestial-x44-sombrero-luyten-terra"),
                    name: String("Terra"),
                    type: String("planet"),
                    orbitDistance: Decimal128('8.99E13'),
                    sol: Decimal128('752'),
                    hoursPerSol: Decimal128('99.51'),
                    mass: Decimal128('6.1E22'),
                    diameter: NumberInt('18222'),
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
