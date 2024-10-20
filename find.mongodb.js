use ("rifstar");


//Finding currency based on name
db.currencies.find(
    {
        name: String("Florin")
    }
)



//Finding currencies with specific codes
db.currencies.find(
    {
        code: { $in: ["FL","FC","AS"] }
    }
)



//Finding weak currencies =>500 compared to UC (excluding the universal currency)
//not showing the code, sign and id
//Sort it from weakest to strongest (descending)
db.currencies.find(
    {
        value: { $gte: 500 },
        _id: { $ne: "currency-uc" }
    },
    {
        sign: 0, _id: 0, code: 0
    }
).sort( {value: -1} ).pretty()


//Finding strong currencies <500 compared to UC (excluding the universal currency)
//not showing the code, sign and id
//Sort it from strongest to weakest (ascending)
db.currencies.find(
    {
        value: { $lt: 500 },
        _id: { $ne: "currency-uc" }
    },
    {
        sign: 0, _id: 0, code: 0
    }
).sort( {value: 1} ).pretty()