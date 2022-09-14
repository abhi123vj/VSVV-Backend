const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema({
  issueAdminID: {
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
   default: Date.now()
  },
});

module.exports = mongoose.model("issue", issueSchema);
