use ("rifstar");

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
            
            "galaxies.solarSystems.centralCelestial.orbitingCelestials.type": { $eq: "planet" }
        }
    },
    { 
        $project: {
            _id: "$galaxies.solarSystems.centralCelestial.orbitingCelestials._id",
            name: "$galaxies.solarSystems.centralCelestial.orbitingCelestials.name",
            type: "$galaxies.solarSystems.centralCelestial.orbitingCelestials.type",
            orbitDistance: "$galaxies.solarSystems.centralCelestial.orbitingCelestials.orbitDistance",
            sol: "$galaxies.solarSystems.centralCelestial.orbitingCelestials.sol",
            hoursPerSol: "$galaxies.solarSystems.centralCelestial.orbitingCelestials.hoursPerSol",
            mass: "$galaxies.solarSystems.centralCelestial.orbitingCelestials.mass",
            diameter: "$galaxies.solarSystems.centralCelestial.orbitingCelestials.diameter"
        }
    },
    { 
        $project: {
            _id: 1,
            name: 1,
            type: 1,
            orbitDistance: 1,
            sol: 1,
            hoursPerSol: 1,
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

