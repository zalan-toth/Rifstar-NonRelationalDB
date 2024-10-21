use ("rifstar");

//removing weak currencies
db.currencies.deleteMany(
    {
        value: { $gte: 500 }
    }
)

//removing one
db.currencies.deleteOne(
    {
        sign: "฿"
    }
)