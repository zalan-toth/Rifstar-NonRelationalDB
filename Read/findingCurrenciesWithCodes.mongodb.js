use ("rifstar");


//Finding currencies with specific codes
db.currencies.find(
    {
        code: { $in: ["FL","FC","AS"] }
    }
)
