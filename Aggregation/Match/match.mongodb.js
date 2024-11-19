use ("rifstar");

db.currencies.aggregate([
    { 
        $match: {
            value: { $gt: 500 }
        }
    }
]);