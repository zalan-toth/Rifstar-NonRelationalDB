use ("rifstar");

db.currencies.aggregate([
    {
        $lookup: {
            from: "currencies",
            pipeline: [],
            as: "exchange"
        }
    },
    {
        $unwind: "$exchange"
    },
    {
      $match: {
        $expr: { $ne: ["$_id", "$exchange._id"] } //same currency exception
      }
    },
    {
        $project: {
            from: "$code",
            to: "$exchange.code",
            exchangeRate: {
                $divide: ["$exchange.value", "$value"]
            }
        }
    }
])