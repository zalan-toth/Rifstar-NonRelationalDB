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
            diameter: "$galaxies.solarSystems.centralCelestial.orbitingCelestials.diameter"
        }
    },
    {
        $group: {
            _id: null,
            maxDiameter: { $min: "$diameter" }
        }
    },
    { 
        $project: {
            _id: 0
        }
    }
])

