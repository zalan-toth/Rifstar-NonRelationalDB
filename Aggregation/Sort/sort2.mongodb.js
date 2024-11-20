use ("rifstar");


//finding the 3 furthest planets from the Sun in the SolarSystem
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
        $project: {
            planet: "$galaxies.solarSystems.centralCelestial.orbitingCelestials._id",
            planetName: "$galaxies.solarSystems.centralCelestial.orbitingCelestials.name",
            orbitDistance: "$galaxies.solarSystems.centralCelestial.orbitingCelestials.orbitDistance"
        }
    },
    {
        $sort: {
            orbitDistance: -1 //descending order
        }
    },
    { 
        $limit: 3 //get the furthests
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

