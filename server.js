const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const eventsRouter = require("./routers/events");
const errorHandler = require("./middlewares/errorHandler");
const wrongRoute = require("./middlewares/wrongRoute");

// file config
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/events", eventsRouter);

// errors and wrong route middlewares
app.use(errorHandler);
app.use(wrongRoute);

app.listen(port || 8000, () => {
  console.log(`server is running on port ${port}`);
});
