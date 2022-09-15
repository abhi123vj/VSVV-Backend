 const express = require("express");
// const {
//     removeBook,
//     viewBook,
//     updateBook,
//     homeDummy,
//     getBookList,
//     addBookList,
//     issueBook,
//     returnBook,
//     getIssueListt
// } = require("../controller/homeController");
// const {isLoggedIn, customRole} = require("../middlewares/user");

const router = express.Router();

router.route("/").get(homeDummy);
// router.route("/userdashboard").get(isLoggedIn, getBookList);

// router.route("/admin/addbooks").post(isLoggedIn, customRole("admin"), addBookList);
// router.route("/admin/book/:id")
// .get(isLoggedIn, customRole("admin"), viewBook).put(isLoggedIn, customRole("admin"), updateBook).delete(isLoggedIn, customRole("admin"), removeBook)

// router.route("/admin/issueBook").post(isLoggedIn, customRole("admin"), issueBook);
// router.route("/admin/returnBook/:id").post(isLoggedIn, customRole("admin"), returnBook);
// router.route("/admin/issueList").get(isLoggedIn, customRole("admin"), getIssueListt);

 module.exports = router;
