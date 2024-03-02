const express = require("express")
const app = express();
const morgan = require("morgan")
const itemsRoutes = require("./routes/items")
const ExpressError = require("./expressError")

app.use(express.json());
app.use("/items", itemsRoutes);
app.get('/favicon.ico', (req, res) => res.sendStatus(204))


/** 404 handler */

app.use(function (req, res, next) {
  return new ExpressError("sdfNot Found", 404);
});

/** general error handler */

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    error: err.message,
  });
});

// app.listen(3000, function () {
//   console.log("Server starting on port 3000")
// })

module.exports = app;