use ("rifstar")

//limit the currency output to 2
db.currencies.aggregate([
    { $limit: 2 }
  ])