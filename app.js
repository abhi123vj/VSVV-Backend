const express = require("express");
var cors = require('cors')
require("dotenv").config();
const app = express();
var morgan = require("morgan");
const cookieParser = require("cookie-parser");

app.use(cors())
// for swagger documentation
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const CustomError = require("./utils/customErrors");

// regular middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookies and file middleware
app.use(cookieParser());

app.use(morgan("tiny"));

// import all routes here
const home = require("./routes/home");
const user = require("./routes/user");
// router middleware
app.use("/api/v1", home);
app.use("/api/v1", user);

app.use((req, res, next) => {
  next(next(new CustomError("Not Found", 404)));
});

app.use((error, req, res, next) => {
  res.status(error.code || 500);
  res.json({
    success: false,
    errorMessage:  error.message,

  });
});

module.exports = app;
