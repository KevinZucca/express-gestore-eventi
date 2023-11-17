const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT;

// routes
app.get("/events", eventsRouter);
app.post("/events", eventsRouter);
app.put("/event/:event", eventsRouter);

app.listen(port || 8000, () => {
  console.log(`server is running on port ${port}`);
});
