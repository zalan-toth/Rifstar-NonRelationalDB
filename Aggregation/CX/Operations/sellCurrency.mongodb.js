use ("rifstar");

db.exchangeRates.aggregate([
    {
        //I wanna sell 68 Florin to get Federal Currency!
        $match: {
            _id: "FL-FC"
        }
    },
    {
        $project: {
            sellingFlorin: 68,
            resultInFederalCurrency: {
                $multiply: [
                    { $multiply: [68, "$sellExchangeRate"] },
                ]
            }
        }
    }
])