use ("rifstar");

//Getting the member nations directly under the flag of an association in 1 place
db.associations.aggregate([
    {
        $lookup: {
          from: "nations",
          localField: "nations",
          foreignField: "_id",
          as: "memberNations"
        }
    },
    {
        $project: {
          _id: 1,
          name: 1,
          memberNations: 1
        }
    }
])