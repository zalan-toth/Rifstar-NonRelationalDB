use ("rifstar");


//Inserting the Solar System
db.universes.insertOne(

    { 
        _id: String("universe-x44"), 
        name: String("x44"), 
        creationTime: Decimal128('0'), 
        creationEarthTime: ISODate("2024-12-01T00:00:00Z"),
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
                            diameter: NumberInt('1391400'),
                            type: String("star"),
                            orbitDistance: Decimal128('-27000'),
                            mass: Decimal128('1.989E30'),
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
                                    diameter: NumberInt('4880'), //km
                                    type: String("planet"),
                                    orbitDistance: Decimal128('57.9E6'), // positive - km , negative - lightyear
                                    sol: Decimal128('87.97'),
                                    hoursPerSol: Decimal128('1407.5'),
                                    mass: Decimal128('3.285E23') //kg
                                },
                                {
                                    _id: String("celestial-x44-milkyway-solar-venus"),
                                    name: String("Venus"),
                                    coordinate: {
                                        x: NumberLong('0'),
                                        y: NumberLong('0'),
                                        z: NumberLong('0')
                                    },
                                    diameter: NumberInt('12104'),
                                    type: String("planet"),
                                    orbitDistance: Decimal128('108.2E6'),
                                    sol: Decimal128('224.7'),
                                    hoursPerSol: Decimal128('5832.5'),
                                    mass: Decimal128('4.867E24')
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
                                    orbitDistance: Decimal128('149.6E6'),
                                    sol: Decimal128('365.26'),
                                    hoursPerSol: Decimal128('24'),
                                    mass: Decimal128('5.972E24'),
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
                                            orbitDistance: Decimal128('54.335632344')
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
                                            orbitDistance: Decimal128('213.325632245'),
                                            sol: Decimal128('23.26'),
                                            hoursPerSol: Decimal128('53623'),
                                            mass: Decimal128('2156'),
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
                                                    orbitDistance: Decimal128('58.3521667'),
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
                                    diameter: NumberInt('6779'),
                                    type: String("planet"),
                                    orbitDistance: Decimal128('227.9E6'),
                                    sol: Decimal128('687'),
                                    hoursPerSol: Decimal128('24.6'),
                                    mass: Decimal128('6.39E23')
                                },
                                {
                                    _id: String("celestial-x44-milkyway-solar-jupiter"),
                                    name: String("Jupiter"),
                                    coordinate: {
                                        x: NumberLong('6426246246'),
                                        y: NumberLong('3243525'),
                                        z: NumberLong('62346236236')
                                    },
                                    diameter: NumberInt('139820'),
                                    type: String("planet"),
                                    orbitDistance: Decimal128('778.5E6'),
                                    sol: Decimal128('4333'),
                                    hoursPerSol: Decimal128('9.93'),
                                    mass: Decimal128('1.898E27')
                                },
                                {
                                    _id: String("celestial-x44-milkyway-solar-saturn"),
                                    name: String("Saturn"),
                                    coordinate: {
                                        x: NumberLong('0'),
                                        y: NumberLong('0'),
                                        z: NumberLong('0')
                                    },
                                    diameter: NumberInt('116460'),
                                    type: String("planet"),
                                    orbitDistance: Decimal128('1.434E9'),
                                    sol: Decimal128('10759'),
                                    hoursPerSol: Decimal128('10.7'),
                                    mass: Decimal128('5.683E26')
                                },
                                {
                                    _id: String("celestial-x44-milkyway-solar-uranus"),
                                    name: String("Uranus"),
                                    coordinate: {
                                        x: NumberLong('0'),
                                        y: NumberLong('0'),
                                        z: NumberLong('0')
                                    },
                                    diameter: NumberInt('50724'),
                                    type: String("planet"),
                                    orbitDistance: Decimal128('2.871E9'),
                                    sol: Decimal128('30687'),
                                    hoursPerSol: Decimal128('17.2'),
                                    mass: Decimal128('8.681E25')
                                },
                                {
                                    _id: String("celestial-x44-milkyway-solar-neptune"),
                                    name: String("Neptune"),
                                    coordinate: {
                                        x: NumberLong('0'),
                                        y: NumberLong('0'),
                                        z: NumberLong('0')
                                    },
                                    diameter: NumberInt('49244'),
                                    type: String("planet"),
                                    orbitDistance: Decimal128('4.495E9'),
                                    sol: Decimal128('60190'),
                                    hoursPerSol: Decimal128('16.1'),
                                    mass: Decimal128('1.024E26')
                                }
                            ]

                        }
                    },
                    {
                        _id: String("solarsystem-x44-milkyway-trappist"),
                        name: String("Trappist System"),
                        coordinate: {
                            x: NumberLong('0'),
                            y: NumberLong('0'),
                            z: NumberLong('0')
                        },
                        centralCelestial: {
                            _id: String("celestial-x44-milkyway-trappist-selen"),
                            name: String("Selen"),
                            coordinate: {
                                x: NumberLong('0'),
                                y: NumberLong('0'),
                                z: NumberLong('0')
                            },
                            type: String("star"),
                            interestPoints: null,
                            orbitingCelestials: [
                                {
                                    _id: String("celestial-x44-milkyway-trappist-aetheria"),
                                    name: String("Aetheria"),
                                    coordinate: {
                                        x: NumberLong('0'),
                                        y: NumberLong('0'),
                                        z: NumberLong('0')
                                    },
                                    diameter: NumberInt('7792'),
                                    type: String("planet"),
                                    orbitDistance: Decimal128('199.6E6'),
                                    sol: Decimal128('482'),
                                    hoursPerSol: Decimal128('44'),
                                    mass: Decimal128('82.45E6'),
                                    interestPoints: [
                                        {
                                            _id: String("interestpoint-x44-milkyway-trappist-aetheria-onyx"),
                                            name: String("OnYx"),
                                            type: String("city"),
                                            category: NumberInt('86'),
                                            languages: [
                                                String("Huweq")
                                            ],
                                            description: String("City on Aetheria"),
                                            coordinate: {
                                                x: NumberLong('0'),
                                                y: NumberLong('0'),
                                                z: NumberLong('0')
                                            }
                                        },
                                    ],
                                }
                            ]
                        }
                    }
                ]
            }
        ]
    }

)