use ("rifstar");

db.createCollection("currencies")
db.createCollection("nations")
db.createCollection("associations")
db.createCollection("universes")

//Inserting the Solar System
db.universes.insertOne(

    { 
        _id: String("universe-x44"), 
        name: String("x44"), 
        creationTime: NumberDecimal('0'), 
        creationEarthTime: Date("0000-01-01T00:00:00Z"),
        galaxies: [
            {
                _id: String("galaxy-x44-milkyway"), 
                name: String("Milky Way"),
                coordinate: {
                    x: NumberLong('0'),
                    y: NumberLong('0'),
                    z: NumberLong('0')
                },
                solarSystems: [
                    {
                        _id: String("solarsystem-x44-milkyway-solar"),
                        name: String("Solar System"),
                        coordinate: {
                            x: NumberLong('0'),
                            y: NumberLong('0'),
                            z: NumberLong('0')
                        },
                        centralCelestial: {
                            _id: String("celestial-x44-milkyway-solar-sun"),
                            name: String("Sun"),
                            coordinate: {
                                x: NumberLong('0'),
                                y: NumberLong('0'),
                                z: NumberLong('0')
                            },
                            diameter: NumberInt('635312245'),
                            type: String("star"),
                            orbitDistance: NumberDecimal('2521.325632245'),
                            sol: NumberDecimal('765476'),
                            hoursPerSol: NumberDecimal('655'),
                            mass: NumberInt('8765462136563'),
                            interestPoints: null,
                            orbitingCelestials: [
                                {
                                    _id: String("celestial-x44-milkyway-solar-mercury"),
                                    name: String("Mercury"),
                                    coordinate: {
                                        x: NumberLong('0'),
                                        y: NumberLong('0'),
                                        z: NumberLong('0')
                                    },
                                    diameter: NumberInt('6324'),
                                    type: String("planet"),
                                    orbitDistance: NumberDecimal('1242.23453'),
                                    sol: NumberDecimal('200.32'),
                                    hoursPerSol: NumberDecimal('10.7'),
                                    mass: NumberInt('242')
                                },
                                {
                                    _id: String("celestial-x44-milkyway-solar-venus"),
                                    name: String("Venus"),
                                    coordinate: {
                                        x: NumberLong('0'),
                                        y: NumberLong('0'),
                                        z: NumberLong('0')
                                    },
                                    diameter: NumberInt('3525'),
                                    type: String("planet"),
                                    orbitDistance: NumberDecimal('2000.23453'),
                                    sol: NumberDecimal('280.32'),
                                    hoursPerSol: NumberDecimal('16.7'),
                                    mass: NumberInt('400')
                                },
                                {
                                    _id: String("celestial-x44-milkyway-solar-earth"),
                                    name: String("Earth"),
                                    coordinate: {
                                        x: NumberLong('0'),
                                        y: NumberLong('0'),
                                        z: NumberLong('0')
                                    },
                                    diameter: NumberInt('12742'),
                                    type: String("planet"),
                                    orbitDistance: NumberDecimal('2521.325632245'),
                                    sol: NumberDecimal('365.26'),
                                    hoursPerSol: NumberDecimal('5973600'),
                                    mass: NumberInt('754'),
                                    interestPoints: [
                                        {
                                            _id: String("interestpoint-x44-milkyway-solar-earth-tokyo"),
                                            name: String("Tokyo"),
                                            type: String("city"),
                                            category: NumberInt('86'),
                                            languages: [
                                                String("Japanese"), String("English")
                                            ],
                                            description: String("Large city on Earth"),
                                            coordinate: {
                                                x: NumberLong('0'),
                                                y: NumberLong('0'),
                                                z: NumberLong('0')
                                            }
                                        },
                                        {
                                            _id: String("interestpoint-x44-milkyway-solar-earth-zürich"),
                                            name: String("Zürich"),
                                            type: String("city"),
                                            category: NumberInt('86'),
                                            languages: [
                                                String("German"), String("French"), String("Italian"), String("English")
                                            ],
                                            description: String("Large city on Earth"),
                                            coordinate: {
                                                x: NumberLong('0'),
                                                y: NumberLong('0'),
                                                z: NumberLong('0')
                                            }
                                        },
                                        {
                                            _id: String("interestpoint-x44-milkyway-solar-earth-newyork"),
                                            name: String("New York"),
                                            type: String("city"),
                                            category: NumberInt('86'),
                                            languages: [
                                                String("English")
                                            ],
                                            description: String("Large city on Earth"),
                                            coordinate: {
                                                x: NumberLong('0'),
                                                y: NumberLong('0'),
                                                z: NumberLong('0')
                                            }
                                        },
                                        {
                                            _id: String("interestpoint-x44-milkyway-solar-earth-budapest"),
                                            name: String("Budapest"),
                                            type: String("city"),
                                            category: NumberInt('86'),
                                            languages: [
                                                String("Hungarian")
                                            ],
                                            description: String("Cultural city on Earth"),
                                            coordinate: {
                                                x: NumberLong('0'),
                                                y: NumberLong('0'),
                                                z: NumberLong('0')
                                            }
                                        },
                                        {
                                            _id: String("interestpoint-x44-milkyway-solar-earth-moscow"),
                                            name: String("Moscow"),
                                            type: String("city"),
                                            category: NumberInt('86'),
                                            languages: [
                                                String("Russian")
                                            ],
                                            description: String("Large city on Earth"),
                                            coordinate: {
                                                x: NumberLong('0'),
                                                y: NumberLong('0'),
                                                z: NumberLong('0')
                                            }
                                        },
                                        {
                                            _id: String("interestpoint-x44-milkyway-solar-earth-beijing"),
                                            name: String("Beijing"),
                                            type: String("city"),
                                            category: NumberInt('86'),
                                            languages: [
                                                String("Chinese")
                                            ],
                                            description: String("Large city on Earth"),
                                            coordinate: {
                                                x: NumberLong('0'),
                                                y: NumberLong('0'),
                                                z: NumberLong('0')
                                            }
                                        },
                                        {
                                            _id: String("interestpoint-x44-milkyway-solar-earth-paris"),
                                            name: String("Paris"),
                                            type: String("city"),
                                            category: NumberInt('86'),
                                            languages: [
                                                String("French"), String("English")
                                            ],
                                            description: String("Large city on Earth"),
                                            coordinate: {
                                                x: NumberLong('0'),
                                                y: NumberLong('0'),
                                                z: NumberLong('0')
                                            }
                                        },
                                        {
                                            _id: String("interestpoint-x44-milkyway-solar-earth-london"),
                                            name: String("London"),
                                            type: String("city"),
                                            category: NumberInt('86'),
                                            languages: [
                                                String("English")
                                            ],
                                            description: String("Large city on Earth"),
                                            coordinate: {
                                                x: NumberLong('0'),
                                                y: NumberLong('0'),
                                                z: NumberLong('0')
                                            }
                                        }
                                    ],
                                    orbitingCelestials: [
                                        {
                                            id: String("celestial-x44-milkyway-solar-intelsat1"),
                                            name: String("Intelsat 1"),
                                            type: String("satellite"),
                                            orbitDistance: NumberDecimal('54.335632344')
                                        },
                                        {
                                            id: String("celestial-x44-milkyway-solar-internationalspacestation"),
                                            name: String("International Space Station"),
                                            type: String("station"),
                                            interestPoints: [
                                                {
                                                    id: String("interestpoint-x44-milkyway-solar-internationalspacestation-deck"),
                                                    name: "International Space Station Deck",
                                                    type: "deck",
                                                    category: NumberInt('14'),
                                                    languages: [
                                                        String("English")
                                                    ],
                                                    description: String("Deck of the ISS"),
                                                }
                                            ]
                                        },
                                        {
                                            id: String("celestial-x44-milkyway-solar-moon"),
                                            name: String("Moon"),
                                            type: String("moon"),
                                            coordinate: {
                                                x: NumberLong('0'),
                                                y: NumberLong('0'),
                                                z: NumberLong('0')
                                            },
                                            diameter: NumberInt('2301'),
                                            type: String("planet"),
                                            orbitDistance: NumberDecimal('213.325632245'),
                                            sol: NumberDecimal('23.26'),
                                            hoursPerSol: NumberDecimal('53623'),
                                            mass: NumberInt('2156'),
                                            interestPoints: [
                                                {
                                                    id: String("interestpoint-x44-milkyway-solar-moon-unbase"),
                                                    name: "Universal Moon Base",
                                                    type: "military-structure",
                                                    category: NumberInt('136'),
                                                    languages: [
                                                        String("English")
                                                    ],
                                                    description: String("Moon base"),
                                                }
                                            ],
                                            orbitingCelestials: [
                                                {
                                                    id: String("celestial-x44-milkyway-solar-moonlandsat"),
                                                    name: String("Moon Landsat"),
                                                    type: String("satellite"),
                                                    orbitDistance: NumberDecimal('58.3521667'),
                                                    description: String("Provides detailed imagery for scientific research")
                                                }
                                            ]
                                        }
                                    ]

                                },
                                {
                                    _id: String("celestial-x44-milkyway-solar-mars"),
                                    name: String("Mars"),
                                    coordinate: {
                                        x: NumberLong('531235135'),
                                        y: NumberLong('52374737'),
                                        z: NumberLong('23435325')
                                    },
                                    diameter: NumberInt('2145'),
                                    type: String("planet"),
                                    orbitDistance: NumberDecimal('6000.23453'),
                                    sol: NumberDecimal('400.32'),
                                    hoursPerSol: NumberDecimal('37.7'),
                                    mass: NumberInt('400')
                                },
                                {
                                    _id: String("celestial-x44-milkyway-solar-jupiter"),
                                    name: String("Jupiter"),
                                    coordinate: {
                                        x: NumberLong('6426246246'),
                                        y: NumberLong('3243525'),
                                        z: NumberLong('62346236236')
                                    },
                                    diameter: NumberInt('421412'),
                                    type: String("planet"),
                                    orbitDistance: NumberDecimal('6000.23453'),
                                    sol: NumberDecimal('500.32'),
                                    hoursPerSol: NumberDecimal('66.7'),
                                    mass: NumberInt('4020')
                                },
                                {
                                    _id: String("celestial-x44-milkyway-solar-uranus"),
                                    name: String("Uranus"),
                                    coordinate: {
                                        x: NumberLong('0'),
                                        y: NumberLong('0'),
                                        z: NumberLong('0')
                                    },
                                    diameter: NumberInt('4123523'),
                                    type: String("planet"),
                                    orbitDistance: NumberDecimal('6000.23453'),
                                    sol: NumberDecimal('520.32'),
                                    hoursPerSol: NumberDecimal('68.7'),
                                    mass: NumberInt('42145')
                                },
                                {
                                    _id: String("celestial-x44-milkyway-solar-neptun"),
                                    name: String("Neptun"),
                                    coordinate: {
                                        x: NumberLong('0'),
                                        y: NumberLong('0'),
                                        z: NumberLong('0')
                                    },
                                    diameter: NumberInt('2145'),
                                    type: String("planet"),
                                    orbitDistance: NumberDecimal('6000.23453'),
                                    sol: NumberDecimal('1000.32'),
                                    hoursPerSol: NumberDecimal('387.7'),
                                    mass: NumberInt('2154512')
                                },
                                {
                                    _id: String("celestial-x44-milkyway-solar-saturn"),
                                    name: String("Saturn"),
                                    coordinate: {
                                        x: NumberLong('0'),
                                        y: NumberLong('0'),
                                        z: NumberLong('0')
                                    },
                                    diameter: NumberInt('2145'),
                                    type: String("planet"),
                                    orbitDistance: NumberDecimal('6000.23453'),
                                    sol: NumberDecimal('1120.78'),
                                    hoursPerSol: NumberDecimal('500.7'),
                                    mass: NumberInt('54125')
                                }
                            ]

                        }
                    }
                ]
            }
        ]
    }

)