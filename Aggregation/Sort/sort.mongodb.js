use ("rifstar");

//sort by the values of the currencies strongest to weakest
db.currencies.aggregate([
    {
        $match: {
            _id: { $not: { $eq: "currency-uc"} } //exclude the UC
        }
    },
    {
        $sort: {
            value: 1
        }
    }
])