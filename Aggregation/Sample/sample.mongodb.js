use ("rifstar");

//get 2 random (sample) planets
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
            name: "$galaxies.solarSystems.centralCelestial.orbitingCelestials.name",
            _id: 1 
        }
    },
    {
        $sample: {
          size: 2
        }
    }
])