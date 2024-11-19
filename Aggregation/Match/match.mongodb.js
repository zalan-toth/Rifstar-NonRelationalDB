use ("rifstar");


//finding weak currencies with aggregation match
db.currencies.aggregate([
    { 
        $match: {
            value: { $gt: 500 }
        }
    }
]);