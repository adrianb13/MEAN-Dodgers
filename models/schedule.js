const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scheduleSchema = new Schema ({
  id: {
    type: Integer,
    required: true,
    unique: true
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  home: {
    type: Boolean,
    required: true
  },
  opponent: {
    type: String,
    required: true
  },
  score: {
    type: String,
    required: true
  },
  win: {
    type: Boolean
  }
});

const Schedule = mongoose.model("Schedule", scheduleSchema);

module.exports = Schedule;