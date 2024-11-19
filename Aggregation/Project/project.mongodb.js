use ("rifstar");

//get the exchange rates for currencies compared to the universal currency
db.currencies.aggregate([
    {
        $match: {
            _id: { $not: { $eq: "currency-uc"} } //exclude the UC
        }
    },
    {
        $project: {
            BuyingExchangeRate: { $round: [{$multiply: ["$value", 1.03]},4] },
            MidExchangeRate: "$value",
            SellingExchangeRate: { $round: [{$multiply: ["$value", 0.97]},4] },
        }
    }
])