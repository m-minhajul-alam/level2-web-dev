db.test.aggregate([
  // stage 1
  {
    $bucket: {
      groupBy: "$age",
      boundaries: [20, 40, 60, 80],
      default: "above 80", // give the remaning/default name
      output: {
        count: {
          $sum: 1,
        },
        details: {
          $push: "$$ROOT",
        },
      },
    },
  },

  // stage 2
  {
    $sort: { count: -1 },
  },

  // stage 3
  {
    $limit: 2,
  },

  // stage 4
  {
    $project: { count: 1 },
  },
]);
