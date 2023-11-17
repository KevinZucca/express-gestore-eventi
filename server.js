const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT;

app.listen(port || 8000, () => {
  console.log(`server is running on port ${port}`);
});
