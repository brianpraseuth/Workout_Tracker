const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "What type of workout is this?"
      },
  name: {
    type: String,
    trim: true,
    required: "What is the name of this workout?"
  },
  duration: {
    type: Number,
    required: "How many minutes is this workout?"
  },
  reps: {
    type: Number,
    required: "How many reps is this workout?"
  },
  duration: {
    type: Number,
    required: "How many sets is in this workout?"
  }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;