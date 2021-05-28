const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const personSchema = new Schema({
	name: String,
	surname: String,
	age: Number,
});

module.exports = mongoose.model("Person", personSchema);
