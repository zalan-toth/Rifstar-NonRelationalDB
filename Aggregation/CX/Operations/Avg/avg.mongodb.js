use ("rifstar");


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
    }
])

