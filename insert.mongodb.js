use ("rifstar");

db.createCollection("currencies")
db.createCollection("nations")
db.createCollection("associations")
db.createCollection("universes")

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
                                        }
                                    ]

                                }
                            ]

                        }
                    }
                ]
            }
        ]
    }

)