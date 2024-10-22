use ("rifstar");



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