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


//Find all currencies except UC FC AS, show only name sign and id in result
db.currencies.find(
    {
        code: { $nin: ["UC","FC","AS"] }
    },
    {
        sign: 1, name: 1
    }
).pretty()

//using or to find republics that are English speaking
db.nations.find(
    {
        $and: [
            { type: "Republic" },
            { languages: { $in: ["English"] } }
        ]
    }
).pretty()
