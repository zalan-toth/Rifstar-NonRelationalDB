use ("rifstar");

//getting the planets of the solar system ordered by closeness to the Sun
db.universes.aggregate([
    { 
        $unwind: "$galaxies"
    },
    { 
        $unwind: "$galaxies.solarSystems"
    },
    { 
        $match: {
            
            "galaxies.solarSystems.centralCelestial.name": { $eq: "Sun" }
        }
    },
    { 
        $unwind: "$galaxies.solarSystems.centralCelestial.orbitingCelestials"
    },
    { 
        $match: {
            
            "galaxies.solarSystems.centralCelestial.orbitingCelestials.type": { $eq: "planet" }
        }
    },
    { 
        $project: {
            planet: "$galaxies.solarSystems.centralCelestial.orbitingCelestials._id",
            planetName: "$galaxies.solarSystems.centralCelestial.orbitingCelestials.name",
            orbitDistance: "$galaxies.solarSystems.centralCelestial.orbitingCelestials.orbitDistance"
        }
    },
    {
        $sort: {
            orbitDistance: 1 //get planets in order starting from the closest to the Sun
        }
    },
    { 
        $project: {
            _id: 0,
            planet: 1,
            planetName: 1,
            orbitDistance: 1
        }
    }
])

