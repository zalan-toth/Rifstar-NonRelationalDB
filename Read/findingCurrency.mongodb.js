use ("rifstar");


//Finding currency based on name
db.currencies.find(
    {
        name: String("Florin")
    }
)