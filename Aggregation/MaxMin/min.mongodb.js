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
        $project: {
            planet: "$galaxies.solarSystems.centralCelestial.orbitingCelestials._id",
            diameter: "$galaxies.solarSystems.centralCelestial.orbitingCelestials.diameter"
        }
    },
    {
        $group: {
            _id: null,
            minDiameter: { $min: "$diameter" }
        }
    }, //we loose data about the correspongind planet this way. :-(
    { 
        $project: {
            _id: 0
        }
    }
])

