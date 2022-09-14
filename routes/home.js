const express = require("express");
const {
    removeBook,
    viewBook,
    updateBook,
    homeDummy,
    getBookList,
    addBookList
} = require("../controller/homeController");
const {isLoggedIn, customRole} = require("../middlewares/user");

const router = express.Router();

router.route("/").get(homeDummy);
router.route("/userdashboard").get(isLoggedIn, getBookList);

router.route("/admin/addbooks").post(isLoggedIn, customRole("admin"), addBookList);
router.route("/admin/book/:id").
get(isLoggedIn, customRole("admin"), viewBook).put(isLoggedIn, customRole("admin"), updateBook).delete(isLoggedIn, customRole("admin"), removeBook)
module.exports = router;
