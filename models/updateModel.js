const momgoose = require("mongoose");

const updateSchema = new momgoose.Schema({
    participants: [{
        type: momgoose.Schema.ObjectId,
        ref:  "Employee"
    }],
    taskId: {type:momgoose.Schema.ObjectId, require: true},
    message: [{
        text: {type:String},
        from: {type: momgoose.Schema.ObjectId},
        createAt: {type:Date, default: Date.now()},
        status: unseen,
    }]
});

const Update = new momgoose.Model("update", updateSchema);

exports.Model = {Update}