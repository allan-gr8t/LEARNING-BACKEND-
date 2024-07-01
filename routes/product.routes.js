const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getSingleProduct,
  createAProduct,
  updateAProduct,
  deleteAProduct,
} = require("../controller/product.controller");
//get all products
router.get("/", getAllProducts);
// single product
router.get("/:id", getSingleProduct);
// create a product
router.post("/", createAProduct);
// update an existing one
router.put("/:id", updateAProduct);
// delete a product
router.delete("/:id", deleteAProduct);

module.exports = router;
