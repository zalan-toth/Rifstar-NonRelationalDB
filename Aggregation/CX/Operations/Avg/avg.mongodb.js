use ("rifstar");


db.celestials.aggregate([
    {
        $group: {
          _id: "$type",
          avgDiameter: {
            $avg: "$diameter"
          }
        }
    }
])

