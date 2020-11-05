const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
{
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
  },
  sets: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  distance: {
    type: Number
  }
}]
}, {
  toJSON: {
    // include any virtual properties when data is requested
    virtuals: true
}
});

workoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;