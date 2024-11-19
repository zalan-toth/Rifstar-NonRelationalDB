use ("rifstar");

//Count the languages of all nations
db.nations.aggregate([
    {
        $unwind: "$languages"
    },
    {
        $count: "totalLanguages"
    }
]);
