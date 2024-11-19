use ("rifstar");

db.universes.aggregate([
    { 
        $match: { 
            "_id": "universe-x44" //getting the Mars celestial in Universe x44
        }
    },
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
            "galaxies.solarSystems.centralCelestial.orbitingCelestials.name": "Mars" 
        } 
    },
    { 
        $project: {
            orbitingCelestial: "$galaxies.solarSystems.centralCelestial.orbitingCelestials",
            _id: 0 //To not show the universe id
        }
    }
])

