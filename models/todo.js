var mongoose = require("mongoose");
var todoSchema = new mongoose.Schema({
    name: String,
    isDone: Boolean,
    priority: String
});

module.exports = mongoose.model("Todo", todoSchema);