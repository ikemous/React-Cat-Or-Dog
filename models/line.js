const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LineSchema = new Schema({
    line: String
});

const Line = mongoose.model("Line", LineSchema);
module.exports = Line;