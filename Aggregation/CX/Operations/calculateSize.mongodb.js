use ("rifstar");

//approximate (as celestials are not perfect sphere) volume, surface and density 
db.celestials.aggregate([
    {
        $project: {  //calculate if it was a perfect sphere
            volume: {
                $multiply: [
                    (4 / 3),
                    3.1415926535897,
                    {
                        $pow: [
                            { $divide: ["$diameter",2] },
                            3 //köbre
                        ]
                    }
                ]
            },
            surface: {
                $multiply: [
                    4,
                    {
                        $pow: [ "$diameter", 2 ]//négyzetre-squared
                    },
                    3.1415926535897
                ]
            },
            density: { }
        }
    }
])

