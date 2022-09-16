const User = require("../models/users");
const BigPromise = require("../middlewares/bigPromise");
const CustomError = require("../utils/customErrors");
const cookieToken = require("../utils/cookieToken");

// exports.signup = BigPromise(async (req, res, next) => {
//   //let result;

//   const { name, email, password,role } = req.body;

//   if (!email) {
//     return next(new CustomError("Email is required", 400));
//   }
//   if (!name) {
//     return next(new CustomError("Name is required", 400));
//   }
//   if (!password) {
//     return next(new CustomError("Password is required", 400));
//   }

//   const user = await User.create({
//     name,
//     email,
//     password,
//     role
//   });

//   cookieToken(user, res);
// });

// exports.login = BigPromise(async (req, res, next) => {
//   const { email, password } = req.body;

//   // check for presence of email and password
//   if (!email || !password) {
//     return next(new CustomError("please provide email and password", 400));
//   }

//   // get user from DB
//   const user = await User.findOne({ email }).select("+password");


//   // if user not found in DB
//   if (!user) {
//     return next(
//       new CustomError("Email or password does not match or exist", 400)
//     );
//   }

//   // match the password
//   const isPasswordCorrect = await user.isValidatedPassword(password);

//   //if password do not match
//   if (!isPasswordCorrect) {
//     return next(
//       new CustomError("Email or password does not match or exist", 400)
//     );
//   }

//   // if all goes good and we send the token
//   cookieToken(user, res);
// });


// exports.login = BigPromise(async (req, res, next) => {
//   const { email, password } = req.body;
//   // check for presence of email and password
//   if (!email || !password) {
//     return next(new CustomError("please provide email and password", 400));
//   }

//   // get user from DB
//   const user = await User.findOne({ email }).select("+password");


//   // if user not found in DB
//   if (!user) {
//     return next(
//       new CustomError("Email or password does not match or exist", 400)
//     );
//   }

//   // match the password
//   const isPasswordCorrect = await user.isValidatedPassword(password);

//   //if password do not match
//   if (!isPasswordCorrect) {
//     return next(
//       new CustomError("Email or password does not match or exist", 400)
//     );
//   }

//   // if all goes good and we send the token
//   cookieToken(user, res);
// });


exports.login = async  (req, res, next) => {
  try {const { email, password } = req.body;
  // check for presence of email and password
  if (!email || !password) {
    return next(new CustomError("please provide email and password", 400));
  }

  // get user from DB
  const user = await User.findOne({ email }).select("+password");


  // if user not found in DB
  if (!user) {
    return next(
      new CustomError("Email or password does not match or exist", 400)
    );
  }

  // match the password
  const isPasswordCorrect = await user.isValidatedPassword(password);

  //if password do not match
  if (!isPasswordCorrect) {
    return next(
      new CustomError("Email or password does not match or exist", 400)
    );
  }

  // if all goes good and we send the token
  cookieToken(user, res);
}catch(e){
  res.status(400).json({
    success: false,
 error:e
  });
}}
