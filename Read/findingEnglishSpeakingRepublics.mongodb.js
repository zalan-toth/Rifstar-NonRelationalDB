use ("rifstar");


//using or to find republics that are English speaking
db.nations.find(
    {
        $and: [
            { type: "Republic" },
            { languages: { $in: ["English"] } }
        ]
    }
).pretty()
