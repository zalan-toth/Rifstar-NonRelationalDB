use ("rifstar");

db.universes.aggregate([
    { 
        $unwind: "$galaxies"
    },
    { 
        $unwind: "$galaxies.solarSystems"
    },
    { 
        $match: {
            
            "galaxies.solarSystems.centralCelestial.type": { $eq: "star" }
        }
    },
    { 
        $project: {
            _id: "$galaxies.solarSystems.centralCelestial._id",
            name: "$galaxies.solarSystems.centralCelestial.name",
            type: "$galaxies.solarSystems.centralCelestial.type",
            orbitDistance: "$galaxies.solarSystems.centralCelestial.orbitDistance",
            mass: "$galaxies.solarSystems.centralCelestial.mass",
            diameter: "$galaxies.solarSystems.centralCelestial.diameter"
        }
    },
    { 
        $project: {
            _id: 1,
            name: 1,
            type: 1,
            orbitDistance: 1,
            mass: 1,
            diameter: 1
        }
    },
    { 
        $merge: {
          into: 'celestials',
          whenMatched: 'merge',
          whenNotMatched: 'insert'
        }
    }
])

