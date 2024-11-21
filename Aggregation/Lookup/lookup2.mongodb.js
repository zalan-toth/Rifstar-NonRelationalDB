use ("rifstar");

//For each nation get it's currency as well as its association's currency!
db.associations.aggregate([
    {
        $lookup: {
            from: "nations",
            localField: "nations",
            foreignField: "_id",
            as: "memberNations"
        }
    },
    {
        $unwind: "$memberNations"
    },
    {
        $project: {
            _id: 1,
            associationName: "$name",
            nationName: "$memberNations.name",
            nationCurrency: "$memberNations.currency",
            currency: "$currency"
        }
    },
    {
        $lookup: {
            from: "currencies",
            localField: "currency",
            foreignField: "_id",
            as: "associationCurrency"
        }
    },
    {
        $lookup: {
            from: "currencies",
            localField: "nationCurrency",
            foreignField: "_id",
            as: "nationCurrency"
        }
    },
    {
        $project: {
            _id: 1,
            associationName: 1,
            nationName: 1,
            associationCurrency: 1,
            nationCurrency: 1
        }
    }
])