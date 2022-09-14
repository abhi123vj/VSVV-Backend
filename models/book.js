const mongoose = require("mongoose");


const bookSchema = new mongoose.Schema({
  bookName: {
    type: String,
    required: [true, "Please provide a name"],
  },
  bookAuthor: {
    type: String,
    required: [true, "Please provide author name"],
  },

 
});


module.exports = mongoose.model("Books", bookSchema);
