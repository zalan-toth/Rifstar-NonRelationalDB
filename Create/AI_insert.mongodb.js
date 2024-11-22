use ("rifstar");

// Inserting the Fantasy Universe x57
db.universes.insertOne(
    { 
        _id: String("universe-x57"), 
        name: String("x57"), 
        creationTime: Decimal128('0'), 
        creationEarthTime: ISODate("2024-12-01T00:00:00Z"),
        galaxies: [
            {
                _id: String("galaxy-x57-zenith"),
                name: String("Zenith"),
                coordinate: {
                    x: NumberLong('135324'),
                    y: NumberLong('76493'),
                    z: NumberLong('89534')
                },
                solarSystems: [
                    {
                        _id: String("solarsystem-x57-zenith-vorath"),
                        name: String("Vorath System"),
                        coordinate: {
                            x: NumberLong('56342'),
                            y: NumberLong('13245'),
                            z: NumberLong('98432')
                        },
                        centralCelestial: {
                            _id: String("celestial-x57-zenith-vorath-ignis"),
                            name: String("Ignis"),
                            coordinate: {
                                x: NumberLong('56342'),
                                y: NumberLong('13245'),
                                z: NumberLong('98432')
                            },
                            diameter: NumberInt('1512000'),
                            type: String("star"),
                            orbitDistance: Decimal128('-34000'),
                            mass: Decimal128('2.5E30'),
                            interestPoints: null,
                            orbitingCelestials: [
                                {
                                    _id: String("celestial-x57-zenith-vorath-pyraxis"),
                                    name: String("Pyraxis"),
                                    coordinate: {
                                        x: NumberLong('56200'),
                                        y: NumberLong('13000'),
                                        z: NumberLong('98000')
                                    },
                                    diameter: NumberInt('6214'),
                                    type: String("planet"),
                                    orbitDistance: Decimal128('74.8E6'),
                                    sol: Decimal128('145.2'),
                                    hoursPerSol: Decimal128('34.5'),
                                    mass: Decimal128('6.5E23'),
                                    orbitingCelestials: [
                                        {
                                            _id: String("celestial-x57-zenith-vorath-pyraxis-alpha"),
                                            name: String("Alpha Moon"),
                                            type: String("moon"),
                                            diameter: NumberInt('3521'),
                                            orbitDistance: Decimal128('384.4'),
                                            mass: Decimal128('7.3E22'),
                                            interestPoints: [
                                                {
                                                    _id: String("interestpoint-x57-zenith-vorath-pyraxis-alpha-outpost"),
                                                    name: String("Lunar Outpost Alpha"),
                                                    type: String("research-facility"),
                                                    category: NumberInt('96'),
                                                    languages: [
                                                        String("Common"), String("Zenithian")
                                                    ],
                                                    description: String("Primary research base on Alpha Moon"),
                                                    coordinate: {
                                                        x: NumberLong('56210'),
                                                        y: NumberLong('13010'),
                                                        z: NumberLong('98010')
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    _id: String("celestial-x57-zenith-vorath-umbra"),
                                    name: String("Umbra"),
                                    coordinate: {
                                        x: NumberLong('56500'),
                                        y: NumberLong('13500'),
                                        z: NumberLong('98600')
                                    },
                                    diameter: NumberInt('7892'),
                                    type: String("planet"),
                                    orbitDistance: Decimal128('152.3E6'),
                                    sol: Decimal128('365.1'),
                                    hoursPerSol: Decimal128('28.3'),
                                    mass: Decimal128('8.2E24'),
                                    interestPoints: [
                                        {
                                            _id: String("interestpoint-x57-zenith-vorath-umbra-nexus"),
                                            name: String("Nexus City"),
                                            type: String("megacity"),
                                            category: NumberInt('86'),
                                            languages: [
                                                String("Umbrian"), String("Common")
                                            ],
                                            description: String("A major hub of intergalactic commerce."),
                                            coordinate: {
                                                x: NumberLong('56510'),
                                                y: NumberLong('13510'),
                                                z: NumberLong('98610')
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        _id: String("solarsystem-x57-zenith-lyreth"),
                        name: String("Lyreth System"),
                        coordinate: {
                            x: NumberLong('77324'),
                            y: NumberLong('14254'),
                            z: NumberLong('69432')
                        },
                        centralCelestial: {
                            _id: String("celestial-x57-zenith-lyreth-solara"),
                            name: String("Solara"),
                            coordinate: {
                                x: NumberLong('77324'),
                                y: NumberLong('14254'),
                                z: NumberLong('69432')
                            },
                            diameter: NumberInt('1289000'),
                            type: String("star"),
                            orbitDistance: Decimal128('-25000'),
                            mass: Decimal128('1.8E30'),
                            interestPoints: null,
                            orbitingCelestials: [
                                {
                                    _id: String("celestial-x57-zenith-lyreth-zenon"),
                                    name: String("Zenon"),
                                    coordinate: {
                                        x: NumberLong('77000'),
                                        y: NumberLong('14000'),
                                        z: NumberLong('69000')
                                    },
                                    diameter: NumberInt('5412'),
                                    type: String("planet"),
                                    orbitDistance: Decimal128('85.4E6'),
                                    sol: Decimal128('190.3'),
                                    hoursPerSol: Decimal128('22.8'),
                                    mass: Decimal128('4.7E23')
                                },
                                {
                                    _id: String("celestial-x57-zenith-lyreth-novia"),
                                    name: String("Novia"),
                                    coordinate: {
                                        x: NumberLong('77500'),
                                        y: NumberLong('14500'),
                                        z: NumberLong('69500')
                                    },
                                    diameter: NumberInt('12982'),
                                    type: String("planet"),
                                    orbitDistance: Decimal128('184.9E6'),
                                    sol: Decimal128('502.7'),
                                    hoursPerSol: Decimal128('16.5'),
                                    mass: Decimal128('6.1E24'),
                                    orbitingCelestials: [
                                        {
                                            _id: String("celestial-x57-zenith-lyreth-novia-prime"),
                                            name: String("Prime Moon"),
                                            type: String("moon"),
                                            diameter: NumberInt('4223'),
                                            orbitDistance: Decimal128('624.3'),
                                            mass: Decimal128('1.1E23'),
                                            interestPoints: [
                                                {
                                                    _id: String("interestpoint-x57-zenith-lyreth-novia-prime-lab"),
                                                    name: String("Prime Moon Laboratory"),
                                                    type: String("science-facility"),
                                                    category: NumberInt('93'),
                                                    languages: [
                                                        String("Novian")
                                                    ],
                                                    description: String("Advanced scientific outpost.")
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                ]
            },
            {
                _id: String("galaxy-x57-auron"),
                name: String("Auron"),
                coordinate: {
                    x: NumberLong('87432'),
                    y: NumberLong('45233'),
                    z: NumberLong('12356')
                },
                solarSystems: [
                    {
                        _id: String("solarsystem-x57-auron-ecliptica"),
                        name: String("Ecliptica System"),
                        coordinate: {
                            x: NumberLong('87400'),
                            y: NumberLong('45000'),
                            z: NumberLong('12000')
                        },
                        centralCelestial: {
                            _id: String("celestial-x57-auron-ecliptica-aurion"),
                            name: String("Aurion"),
                            coordinate: {
                                x: NumberLong('87400'),
                                y: NumberLong('45000'),
                                z: NumberLong('12000')
                            },
                            diameter: NumberInt('1404000'),
                            type: String("star"),
                            orbitDistance: Decimal128('-32000'),
                            mass: Decimal128('2.2E30'),
                            interestPoints: null,
                            orbitingCelestials: [
                                {
                                    _id: String("celestial-x57-auron-ecliptica-tirion"),
                                    name: String("Tirion"),
                                    coordinate: {
                                        x: NumberLong('87000'),
                                        y: NumberLong('44500'),
                                        z: NumberLong('11500')
                                    },
                                    diameter: NumberInt('3823'),
                                    type: String("planet"),
                                    orbitDistance: Decimal128('120.7E6'),
                                    sol: Decimal128('301.5'),
                                    hoursPerSol: Decimal128('30.4'),
                                    mass: Decimal128('5.6E23')
                                }
                            ]
                        }
                    }
                ]
            }
        ]
    }
);
