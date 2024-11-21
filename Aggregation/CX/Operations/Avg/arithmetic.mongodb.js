use ("rifstar");

db.currencies.aggregate([
    {
      $match: {
        code: { $ne: "UC"}
      }
    },
    {
        $lookup: {
            from: "currencies",
            pipeline: [
                { $match: { code: { $ne: "UC" } } }
            ],
            as: "exchange"
        }
    },
    {
        $unwind: "$exchange"
    },
    {
      $match: {
        $expr: { $ne: ["$code", "$exchange.code"] } //same currency exception
      }
    },
    {
        $project: {
            _id: { $concat: ["$code", "-", "$exchange.code"] },
            from: "$code",
            to: "$exchange.code",
            exchangeRate: {
                $divide: ["$exchange.value", "$value"]
            }
        }
    }/*,
    {
        $count: "rates"
    }*/,
    { 
        $out: "exchangeRates"
    }
])