const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const threadsSchema = new Schema({
    type: String,
    pseudo: String,
    threadsName: String,
    topic: String,
},{
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

threadsSchema.index({
    threadsName: 'text',
    topic: 'text',
},{
    weights:{
        threadsName: 1,
        topic: 2,
    }
});

const threads = mongoose.model("threads", threadsSchema);
module.exports = threads;