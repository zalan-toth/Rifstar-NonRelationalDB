use ("rifstar");





//Find all currencies except UC FC AS, show only name sign and id in result
db.currencies.find(
    {
        code: { $nin: ["UC","FC","AS"] }
    },
    {
        sign: 1, name: 1
    }
).pretty()