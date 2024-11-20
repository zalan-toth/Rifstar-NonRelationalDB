use ("rifstar")

//skip 3 currencies and then list all
db.currencies.aggregate([
    { $skip: 3 }
  ])