use ("rifstar");


//finding the smallest planet based on diameter
db.universes.aggregate([
    { 
        $unwind: "$galaxies"
    },
    { 
        $unwind: "$galaxies.solarSystems"
    },
    { 
        $unwind: "$galaxies.solarSystems.centralCelestial.orbitingCelestials"
    },
    { 
        $match: {
            "galaxies.solarSystems.centralCelestial.orbitingCelestials.diameter": { $ne: null }
        }
    },
    { 
        $project: {
            planet: "$galaxies.solarSystems.centralCelestial.orbitingCelestials._id",
            planetName: "$galaxies.solarSystems.centralCelestial.orbitingCelestials.name",
            diameter: "$galaxies.solarSystems.centralCelestial.orbitingCelestials.diameter"
        }
    },
    {
        $sort: {
            diameter: 1 //ascending order
        }
    },
    { 
        $limit: 1
    }, //we don't loose data about the corresponding planet this way. :-)
    { 
        $project: {
            _id: 0,
            planet: 1,
            planetName: 1,
            diameter: 1
        }
    }
])

