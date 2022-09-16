const BigPromise = require("../middlewares/bigpromise");
const Bookdata = require("../models/book");
const Issuedata = require("../models/issue");
const Recorddata = require("../models/record");
const CustomError = require("../utils/customErrors");

exports.getBookList = BigPromise(async (req, res,next) => {
    const books = await Bookdata.find({}, '-__v');;

    res.status(200).json({success: true, books: books});
});
exports.addBookList = BigPromise(async (req, res) => {
    const bookList = req.body;

//     // for (var i = 0; i < bookList.length; ++ i) {
//     //     const {bookName, bookAuthor} = bookList[i];
//     //     await Bookdata.create({bookName, bookAuthor});

//     // }
    await Bookdata.insertMany(bookList);
    res.status(200).json({success: true, greeting: "Hello from API"});
});

exports.removeBook = BigPromise(async (req, res,next) => {
    const bookdata = await Bookdata.findById((req.params.id));

    await bookdata.remove();

    res.status(200).json({success: true, greeting: "Book removed"});
})
exports.viewBook = BigPromise(async (req, res) => {
    const bookdata = await Bookdata.findById(req.params.id, '-__v');

    res.status(200).json({success: true, bookdata: bookdata});
})
exports.updateBook = BigPromise(async (req, res,next) => {
    const newData = {
        bookName: req.body.bookName,
        bookAuthor: req.body.bookAuthor
    }
    const bookdata = await Bookdata.findByIdAndUpdate(req.params.id, newData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });
    res.status(200).json({success: true, bookdata: bookdata});
})

exports.homeDummy = BigPromise(async (req, res, next) => {
  res.status(200).json({ sucess: true, greetings: "Hellow from dummy" });
});
exports.homeDummy = async (req, res, next) => {
    res.status(200).json({ sucess: true, greetings: "Hellow from dummy" });
  };
  

exports.issueBook = BigPromise(async (req, res,next) => {
    const {bookID, issueUserID, issueDate} = req.body;
    const issueAdminID = req.user.id;
    console.log(issueUserID);
    await Issuedata.create({issueAdminID, bookID, issueUserID, issueDate});

    res.status(200).json({success: true, issue: "Book issued"});
})

exports.returnBook = BigPromise(async (req, res,next) => {
    const {returnDate, fineAmnt} = req.body;
    const issueCloseAdminID = req.user.id;
    const issueData = await Issuedata.findById(req.params.id, '-__v');

    if (!issueData) {
      return next(
        new CustomError("issue not found", 400)
      );
    }

    const {issueAdminID, bookID, issueUserID, issueDate} = issueData;

    await Recorddata.create({
        issueCloseAdminID,
        issueAdminID,
        bookID,
        issueUserID,
        issueDate,
        returnDate,
        fineAmnt
    });
    await issueData.remove();
    const bookdata = await Bookdata.findById(bookID, '-__v');
    res.status(200).json({success: true, message: "Book returned",book: bookdata});
})

exports.getIssueListt = BigPromise(async (req, res,next) => {
  const issues = await Issuedata.find({}, '-__v');;

  res.status(200).json({success: true, issuedBooks: issues});
});
