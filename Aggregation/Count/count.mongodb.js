use ("rifstar");

//Counting how many currencies we have in the system
db.currencies.aggregate([
    {
        $match: {
            _id: { $ne: "currency-uc"} //exclude the universal currency, simplified way
        }
    },
    {
        $count: "currencies"
    }
]);