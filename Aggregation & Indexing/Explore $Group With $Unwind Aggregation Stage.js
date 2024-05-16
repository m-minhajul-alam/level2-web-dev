// db.test.aggregate([
//     // stage 1
//     { $unwind: "$friends" },
//     // stage 2
//     { $group: { _id: "$friends", totalCount: { $sum: 1 } } },
// ]).sort({ totalCount: -1 }).pretty()


// ---
db.test.aggregate([
    // stage 1
    { $unwind: "$interests" },
    // stage 2
    {
        $group: {
            _id: "$age",
            interastBaseOnAge: { $push: "$interests" }
        }
    },
])
    .sort({ "_id": -1 })
    .pretty()