
//Fixating the the values over 600 to 600
db.currencies.updateMany(
    {
      value: { $gt: 600 }
    },
    {
      $set: { "value": Decimal128('600') }
    }
  )
  