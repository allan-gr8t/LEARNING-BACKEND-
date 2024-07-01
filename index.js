// importing the dependencies

const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const ProductRoute = require("./routes/product.routes.js");
const app = express();

// the middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//  the routes
app.use("/api/products", ProductRoute);
app.get("/", (req, res) => {
  res.send("Hello from  node API");
});

// getting all the products

app.get("/api/products");

// get a product by Id
app.get("/api/products/:id");

//post a product
app.post("/api/products");

// update a product
app.put("/api/products/:id");

// delete a product
app.delete("/api/products/:id");
mongoose
  .connect("mongodb://localhost:27017/")
  .then(() => {
    console.log("connected to database!");

    app.listen(6000, () => {
      console.log("server is running on port 6000");
    });
  })
  .catch(() => {
    console.log("connection failed!");
  });
