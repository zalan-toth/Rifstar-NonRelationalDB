use ("rifstar");


//finding the star based on diameter
db.universes.aggregate([
    { 
        $unwind: "$galaxies"
    },
    { 
        $unwind: "$galaxies.solarSystems"
    },
    { 
        $project: {
            diameter: "$galaxies.solarSystems.centralCelestial.diameter"
        }
    },
    {
        $group: {
            _id: null,
            maxDiameter: { $max: "$diameter" }
        }
    },
    { 
        $project: {
            _id: 0
        }
    }
])

