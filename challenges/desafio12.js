db.trips.aggregate([
  {
    $match: {
      $expr: {
        $eq: [5, { $dayOfWeek: "$startTime" }],
      },
    },
  },
  {
    $group: {
      _id: "$startStationName",
      total2: { $sum: 1 },
    },
  },
  {
    $sort: {
      total2: -1,
    },
  },
  {
    $limit: 1,
  },
  {
    $project: {
      _id: 0,
      nomeEstacao: "$_id",
      total: "$total2",
    },
  },
]);
