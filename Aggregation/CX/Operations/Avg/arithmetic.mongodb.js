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
            fromValue: "$value",
            toValue: "$exchange.value",
            midExchangeRate: {
                $divide: ["$exchange.value", "$value"]
            },
            sellExchangeRate: {
                $multiply: [
                    { $divide: ["$exchange.value", "$value"] },
                    0.97
                ]
            },
            buyExchangeRate: { 
                $multiply: [
                    { $divide: ["$exchange.value", "$value"] },
                    1.03
                ]
            }
        }
    },
    { 
        $out: "exchangeRates"
    }
])