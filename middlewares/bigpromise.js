// try catch and async - await || use promise
const CustomError = require("../utils/customErrors");

module.exports = (func) => (req, res, next) =>
  Promise.resolve(func(req, res, next))
    .then(
      (value) => {
        console.log("sucess");

        console.log(value); // "Success"
      },
      (reason) => {
        if (reason.code == 11000)
          next(new CustomError("User Already exsist", 406 ));
        else next(new CustomError("Internal Server Error", 500));
      }
    )
    .catch(next);
