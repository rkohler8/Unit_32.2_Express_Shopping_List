const express = require("express")
const app = express();
const itemsRoutes = require("./routes/items")
const CustomError = require("./error")

app.use(express.json());
app.use("/items", itemsRoutes);

