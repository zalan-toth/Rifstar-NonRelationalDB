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
        $unwind: "$galaxies.solarSystems.centralCelestial.orbitingCelestials.orbitingCelestials"
    },
    { 
        $match: {
            
            "galaxies.solarSystems.centralCelestial.orbitingCelestials.orbitingCelestials.type": { $eq: "moon" }
        }
    },
    { 
        $project: {
            _id: "$galaxies.solarSystems.centralCelestial.orbitingCelestials.orbitingCelestials._id",
            name: "$galaxies.solarSystems.centralCelestial.orbitingCelestials.orbitingCelestials.name",
            type: "$galaxies.solarSystems.centralCelestial.orbitingCelestials.orbitingCelestials.type",
            orbitDistance: "$galaxies.solarSystems.centralCelestial.orbitingCelestials.orbitingCelestials.orbitDistance",
            sol: "$galaxies.solarSystems.centralCelestial.orbitingCelestials.orbitingCelestials.sol",
            hoursPerSol: "$galaxies.solarSystems.centralCelestial.orbitingCelestials.orbitingCelestials.hoursPerSol",
            mass: "$galaxies.solarSystems.centralCelestial.orbitingCelestials.orbitingCelestials.mass",
            diameter: "$galaxies.solarSystems.centralCelestial.orbitingCelestials.orbitingCelestials.diameter"
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

