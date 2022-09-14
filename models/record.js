const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
  issueAdminID: {
    type: String,
    required: [true, "Please provide a name"],
  },
  issueCloseAdminID: {
    type: String,
    required: [true, "Please provide a name"],
  },
  bookID: {
    type: String,
    required: [true, "Please provide book id"],
  },
  issueUserID: {
    type: String,
    required: [true, "Please provide user id name"],
  }, 
  issueDate: {
    type: Date,
  },
  returnDate: {
    type: Date,
    default: Date.now()
  },
  fineAmnt: {
    type: Number,
    default: 0
  },
});

module.exports = mongoose.model("record", recordSchema);
