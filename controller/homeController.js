const BigPromise = require("../middlewares/bigPromise");
const Bookdata = require("../models/book");

exports.getBookList = BigPromise(async (req, res) => {
  const books = await Bookdata.find({},'-__v');;

  res.status(200).json({
    success: true,
   
    books: books,
  });
});
exports.addBookList = BigPromise(async (req, res) => {
  const bookList = req.body;

  for (var i=0; i<bookList.length; ++i) {
    const {bookName,bookAuthor}=bookList[i];
     await Bookdata.create({
      bookName,
      bookAuthor,
    });

}
await Bookdata.insertMany(bookList);
  res.status(200).json({
    success: true,
   
    greeting: "Hello from API",
  });
});

exports.removeBook = BigPromise(async(req,res)=>{
  const bookdata = await Bookdata.findById((req.params.id));

  await bookdata.remove();

  res.status(200).json({
    success: true,
   
    greeting: "Book removed",
  });
})
exports.viewBook = BigPromise(async(req,res)=>{
  const bookdata = await Bookdata.findById(req.params.id,'-__v');



  res.status(200).json({
    success: true,
   
    bookdata: bookdata,
  });
})
exports.updateBook = BigPromise(async(req,res)=>{
  const newData = {
    bookName: req.body.bookName,
    bookAuthor:req.body.bookAuthor
  }
  const bookdata = await Bookdata.findByIdAndUpdate(req.params.id,newData,{
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    bookdata: bookdata,
  });
})

exports.homeDummy = (req, res) => {


  res.status(200).json({
    sucess: true,
    greetings: "Hellow from dummy",
  });
};
