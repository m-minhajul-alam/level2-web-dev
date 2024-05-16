// https://studio3t.com/knowledge-base/articles/mongodb-aggregation-framework/#mongodb-facet

db.test.aggregate([
  {
    $facet: {
      // pipeline 1
      friendsCount: [
        // stage 1
        {
          $unwind: "$friends",
        },
        // stage 2
        {
          $group: {
            _id: "$friends",
            totalCounts: { $sum: 1 },
          },
        },
      ],

      // pipeline 2
      interestsCounts: [
        // stage 1
        {
          $unwind: "$interests",
        },
        // stage 2
        {
          $group: {
            _id: "$interests",
            totalCounts: { $sum: 1 },
          },
        },
      ],

      // pipeline 3
      skillsCount: [
        // stage 1
        {
          $unwind: "$skills",
        },
        // stage 2
        {
          $group: {
            _id: "$skills",
            totalCounts: { $sum: 1 },
          },
        },
      ],

      // pipeline 4
      educationCount: [
        // stage 1
        {
          $unwind: "$education",
        },
        // stage 2
        {
          $group: {
            _id: "$education",
            totalcounts: { $sum: 1 },
          },
        },
      ],
    },
  },
]);
