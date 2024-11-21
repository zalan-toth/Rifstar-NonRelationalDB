use ("rifstar");

//get average/max/min diameter/orbitdistance/sols/hourspersol/mass for each natural celestial category (star/planet/moon)
db.celestials.aggregate([
    {
        $group: {
          _id: "$type",
          maxDiameter: {$max: "$diameter"},
          avgDiameter: {$avg: "$diameter"},
          minDiameter: {$min: "$diameter"},
          maxOrbitDistance: {$max: "$orbitDistance"},
          avgOrbitDistance: {$avg: "$orbitDistance"},
          minOrbitDistance: {$min: "$orbitDistance"},
          maxSols: {$max: "$sol"},
          avgSols: {$avg: "$sol"},
          minSols: {$min: "$sol"},
          maxHoursPerSol: {$max: "$hoursPerSol"},
          avgHoursPerSol: {$avg: "$hoursPerSol"},
          minHoursPerSol: {$min: "$hoursPerSol"},
          maxMass: {$max: "$mass"},
          avgMass: {$avg: "$mass"},
          minMass: {$min: "$mass"}
        }
    },
    { //rounding results to 6 digits
        $project: {
            maxDiameter: { $round: ["$maxDiameter", 6] },
            avgDiameter: { $round: ["$avgDiameter", 6] },
            minDiameter: { $round: ["$minDiameter", 6] },
            maxOrbitDistance: { $round: ["$maxOrbitDistance", 6] },
            avgOrbitDistance: { $round: ["$avgOrbitDistance", 6] },
            minOrbitDistance: { $round: ["$minOrbitDistance", 6] },
            maxSols: { $round: ["$maxSols", 6] },
            avgSols: { $round: ["$avgSols", 6] },
            minSols: { $round: ["$minSols", 6] },
            maxHoursPerSol: { $round: ["$maxHoursPerSol", 6] },
            avgHoursPerSol: { $round: ["$avgHoursPerSol", 6] },
            minHoursPerSol: { $round: ["$minHoursPerSol", 6] },
            maxMass: { $round: ["$maxMass", 6] },
            avgMass: { $round: ["$avgMass", 6] },
            minMass: { $round: ["$minMass", 6] }
        }
    }
])

